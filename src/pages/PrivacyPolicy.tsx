import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16 px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-display text-5xl font-bold text-heritage-burgundy mb-8 text-center">
            Privacy Policy
          </h1>
          
          <div className="bg-heritage-cream p-12 rounded-lg border-4 border-heritage-gold shadow-lg">
            <p className="font-body text-heritage-brown/70 mb-8 italic">
              Last Updated: January 2025
            </p>
            
            <div className="space-y-8 font-body text-lg leading-relaxed text-heritage-brown/90">
              <p>
                Welcome to YantraVeda. We are committed to respecting your privacy and protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when using our website and services.
              </p>
              
              <p>
                By using our website, you hereby consent to our Privacy Policy and agree to its terms.
              </p>
              
              <section>
                <h2 className="font-heading text-3xl font-bold text-heritage-burgundy mb-4">
                  1. Information We Collect
                </h2>
                <p className="mb-4">
                  We collect information to provide and improve our services. The types of information we collect are:
                </p>
                
                <h3 className="font-heading text-2xl font-semibold text-heritage-bronze mb-3">
                  Information You Provide Voluntarily:
                </h3>
                <ul className="list-disc pl-8 space-y-3 mb-4">
                  <li>
                    <strong>Account Information:</strong> When you create an account, we may ask for personal information such as your name and email address to set up and manage your profile.
                  </li>
                  <li>
                    <strong>Location Data:</strong> When you use our "Create" feature, we process the latitude and longitude you provide to perform calculations. If you use the "Current Location" feature, we will request access to your device's geolocation data for this purpose. This location data is used solely for the calculation and is not stored or linked to your personal account unless you explicitly save the creation.
                  </li>
                  <li>
                    <strong>Communications:</strong> If you contact us directly or use our AI chatbot, we may receive your name, email address, and the contents of your message.
                  </li>
                </ul>
                
                <h3 className="font-heading text-2xl font-semibold text-heritage-bronze mb-3">
                  Information We Collect Automatically:
                </h3>
                <ul className="list-disc pl-8 space-y-3">
                  <li>
                    <strong>Log Files and Analytics:</strong> Like most websites, we use log files. This information includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamps, and referring/exit pages. This data is anonymous and used to analyze trends, administer the site, and gather broad demographic information to improve our service.
                  </li>
                  <li>
                    <strong>Cookies:</strong> We use cookies to enhance your experience. Cookies are small text files that allow our website to "remember" your preferences (like unit settings) and maintain your login status. You can configure your browser to reject cookies, but please be aware that some features of the site may not function correctly as a result.
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="font-heading text-3xl font-bold text-heritage-burgundy mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="mb-3">We use the information we collect for the following purposes:</p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>To provide, operate, and maintain the YantraVeda website.</li>
                  <li>To personalize your experience, such as saving your creations to your profile.</li>
                  <li>To understand and analyze how you use our website to improve and develop new features.</li>
                  <li>To communicate with you for customer service and to provide you with updates relating to the website.</li>
                  <li>To find and prevent fraudulent or malicious activity.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="font-heading text-3xl font-bold text-heritage-burgundy mb-4">
                  3. Data Security
                </h2>
                <p>
                  We take reasonable precautions to protect your information. When you submit sensitive information via the website, it is protected both online and offline. Information submitted through forms is encrypted via SSL (Secure Sockets Layer). However, no internet transmission is ever 100% secure or error-free, and you submit information at your own risk. It is your responsibility to safeguard any passwords or special access features you use on this site.
                </p>
              </section>
              
              <section>
                <h2 className="font-heading text-3xl font-bold text-heritage-burgundy mb-4">
                  4. Third-Party Links
                </h2>
                <p>
                  Our website, particularly the "Learn" section, may contain links to other authoritative sites for educational purposes. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage you to read the privacy statements of any other site that collects personally identifiable information.
                </p>
              </section>
              
              <section>
                <h2 className="font-heading text-3xl font-bold text-heritage-burgundy mb-4">
                  5. Children's Privacy
                </h2>
                <p>
                  Our service is intended for a general audience and is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us so we can promptly remove it.
                </p>
              </section>
              
              <section>
                <h2 className="font-heading text-3xl font-bold text-heritage-burgundy mb-4">
                  6. Changes to This Privacy Policy
                </h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>
              
              <section>
                <h2 className="font-heading text-3xl font-bold text-heritage-burgundy mb-4">
                  7. Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:{" "}
                  <a href="mailto:sankar.chaitanya2025@gmail.com" className="text-heritage-bronze hover:text-heritage-gold transition-colors underline">
                    sankar.chaitanya2025@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
