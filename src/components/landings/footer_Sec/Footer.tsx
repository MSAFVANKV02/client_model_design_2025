import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black mt-10">
      {/* Footer container */}
      <div
        className="min-h-[300px] w-full flex flex-col section_container py-14"
        style={{
          backgroundImage: `url('img/Background Images/DoodleBG_image.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="">
          <img src="/img/logo/Logo_white.svg" alt="Logo" />
        </div>
        <div className="flex md:flex-row flex-col h-full mt-auto justify-between">
          <div className="grid md:grid-cols-3 sm:text-sm text-xs md:py-0 py-6 grid-cols-1 text-white gap-2">
            <div className="flex flex-col mt-auto md:gap-0 gap-2">
              <Link to="/careers">Careers</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
            </div>

            <div className="flex flex-col mt-auto md:gap-0 gap-2">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>

            <div className="flex flex-col mt-auto md:gap-0 gap-2">
              <Link to="/terms">Terms of Use</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
          </div>
          {/* Contact Section */}
          <div className="flex flex-col gap-3">
            <h3 className="text-textSec">Get in touch!</h3>
            <p className="text-white">We can help you, Send your queries.</p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Message"
                className="w-full p-2 text-black text-xs rounded-md"
              />
              <Button className="text-white bg-purple-500 hover:bg-purple-600">
                <Icon icon="mdi:send" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
