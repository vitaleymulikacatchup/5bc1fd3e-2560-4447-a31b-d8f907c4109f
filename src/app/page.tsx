"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/8284731/pexels-photo-8284731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Person using a laptop with an online communication platform, showcasing modern work tech."},
  {"id":"about-image","url":"https://images.pexels.com/photos/34325550/pexels-photo-34325550.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A focused businesswoman delivering a presentation in a modern office setting. Ideal for business and corporate themes."},
  {"id":"features-image-1","url":"https://images.pexels.com/photos/5838215/pexels-photo-5838215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A person casually uses a smartphone outdoors in an urban environment, focusing on connection."},
  {"id":"features-image-2","url":"https://images.pexels.com/photos/2882630/pexels-photo-2882630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Focus on password security with white keyboard tiles spelling 'PASSWORD' on a coral background."},
  {"id":"features-image-3","url":"https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A group therapy session taking place indoors with an attentive counselor guiding the discussion."},
  {"id":"contact-image","url":"https://images.pexels.com/photos/46924/pexels-photo-46924.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A smartphone displaying the WhatsApp application screen held by a person."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[{ name: "Home", id: "home" }, { name: "About", id: "about" }, { name: "Features", id: "features" }, { name: "Contact", id: "contact" }]}
          brandName="ChatApp"
          buttonText="Join Now"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <HeroSplit
            title="Connect Instantly, Securely"
            description="Join millions who rely on our chat app for personal and professional communication."
            imageSrc="https://images.pexels.com/photos/8284731/pexels-photo-8284731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <TextAbout
            title="At ChatApp, we believe in connecting people effortlessly."
            buttons={[{ text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <FeatureCardOne
            title="Features"
            description="Explore the powerful features that set us apart."
            features={[
              { title: "End-to-End Encryption", description: "Your privacy is our priority.", imageSrc: "https://images.pexels.com/photos/5838215/pexels-photo-5838215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { title: "Group Chats", description: "Stay connected with multiple friends and colleagues.", imageSrc: "https://images.pexels.com/photos/2882630/pexels-photo-2882630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { title: "Media Sharing", description: "Easily share photos, videos, and more.", imageSrc: "https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <ContactSplit
            tag="Stay Connected"
            title="Get in Touch"
            description="Reach out to us for more information or support."
            imageSrc="https://images.pexels.com/photos/46924/pexels-photo-46924.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <FooterBase
            columns={[
              { title: "Product", items: [{ label: "Features", href: "features" }, { label: "About", href: "about" }] },
              { title: "Support", items: [{ label: "Contact", href: "contact" }, { label: "Privacy Policy", href: "privacy" }] }
            ]}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
