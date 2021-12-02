import Header from "../../Components/Header/Header";
import PDPwrap from "../../Components/PDPwrap/PDPwrap";


const PDP = () => {
    return (
    <>
    <Header />
    <div id="main-content" role="main">
        <div className="wrapper-full">
            <PDPwrap />
        </div>
    </div>
    </>
    );
}

export default PDP;