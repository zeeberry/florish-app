import useUser from '../../hooks/useUser';
import Router from 'next/router';
import MultipleChoice from '../../components/shared/multipleChoice';
import { allApplicationsInfo, findApplicationByID, updateApplication } from '../../graphql/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getOptionRank } from '../../util/intake';

toast.configure();
export default function ReflectionPage({ id, company, role, name, email }) {
    const user = useUser();
    const options = ['Not at all', 'Not really', 'Meh', 'Somewhat', 'Very'];

    const handleClick = async (excitement) => {
        const curExcitement = getOptionRank(options, excitement);
        const { data, errorMessage } = await updateApplication(id, company, role, curExcitement);
        if (data?.updateApplication.currentExcitement === curExcitement) {
            Router.push('/dashboard');
        }
        else {
            toast.error(`Sorry, there was an issue: ${errorMessage}`);
        }
    };

    return (user === undefined) ? (
        <>
            <section>
                <h1>Loading...</h1>
            </section>
        </>
    )
        : (user !== null && user.email === email) ?
            (
                <>
                    <section>
                        <MultipleChoice
                            onClick={handleClick}
                            overline={`Hey there ${name}!`}
                            title={`After the interview, how excited are you to work at ${company}?`}
                            options={options}
                            buttonText='Submit'
                            name='currentExcitement'
                        />
                    </section>
                </>
            )
            :
            <>
                <section>
                    <h1>403 Forbidden</h1>
                </section>
            </>;
};

export async function getStaticPaths() {
    const { data, errorMessage } = await allApplicationsInfo();
    const applications = data.allApplicationsInfo.data;
    const paths = applications.map(application => {
        return {
            params: {
                id: application._id
            }
        };
    });
    return {
        paths,
        fallback: false
    };
};

export async function getStaticProps({ params }) {
    const { data, errorMessage } = await findApplicationByID(params.id);
    const company = data.findApplicationByID.company,
        role = data.findApplicationByID.role,
        name = data.findApplicationByID.profile.name,
        email = data.findApplicationByID.profile.account.email;
    return {
        props: {
            id: params.id,
            company,
            role,
            name,
            email
        }
    }
};