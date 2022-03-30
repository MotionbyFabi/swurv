import ContactPage from '../Components/Contact/ContactPage'
import Layout from '../Components/Layout'

interface Contact {

}

const Contact: React.FC<Contact> = ({}) => {
    return (
        <>
            <Layout title="Swurv - Contact Me">
                <ContactPage />
            </Layout>
        </>
    );
}
export default Contact;
