import Userfront from "@userfront/react";

Userfront.init("5nxmzvb7");

const SignupForm = Userfront.build({
    toolId: "mnonrr",
});

const Signup = () => {
    return <SignupForm />;
};

export default Signup;
