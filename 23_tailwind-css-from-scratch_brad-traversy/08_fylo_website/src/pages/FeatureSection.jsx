import FeatureRow from "../components/FeatureRow.jsx";
import FeatureItem from "./../components/FeatureItem.jsx";

const FeatureSection = () => {
    return (
        <section className="bg-gray-50 pt-12 dark:bg-dark-blue-1" id="features">
            <div className="container mx-auto px-6 pb-32">
                <FeatureRow>
                    <FeatureItem
                        img="/images/icon-access-anywhere.svg"
                        hd="Access your file from anywhere"
                        pd="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
                    />
                    <FeatureItem
                        hd="Security you can trust"
                        pd="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
                        img="/images/icon-security.svg"
                    />
                </FeatureRow>
                <FeatureRow className="mt-28">
                    <FeatureItem
                        img="/images/icon-collaboration.svg"
                        hd="Access your file from anywhere"
                        pd="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
                    />
                    <FeatureItem
                        hd="Security you can trust"
                        img="/images/icon-any-file.svg"
                        pd="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
                    />
                </FeatureRow>
            </div>
        </section>
    );
};

export default FeatureSection;
