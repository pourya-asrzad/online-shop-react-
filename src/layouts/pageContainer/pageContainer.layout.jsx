import Footer from "../footer/footer.layout";
import Header from "../header/header.layout";


const PageContainer = (props) => {
    const { children } = props
    return (
        <>
            <Header />
            <div style={{ marginTop: "10rem" }}>
                {children}
            </div>
            <Footer />
        </>
    );
}

export default PageContainer;