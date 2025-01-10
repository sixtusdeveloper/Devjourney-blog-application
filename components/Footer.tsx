import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Importing the icons

const Footer = () => {
  return (
    <section className="w-full bg-slate-200 border-t mx-auto">
      <div className="max-w-5xl justify-between items-center mx-auto flex gap-8 flex-wrap p-10">
        <nav className="flex gap-6 flex-start">
          <ul className="footer-nav">
            <h6 className="footer-title">Help</h6>
            <li>
              <a href="/post/create" className="link link-hover">
                Getting Started
              </a>
            </li>
            <li>
              <a href="/docs" className="link link-hover">
                Documentation
              </a>
            </li>
            <li>
              <a href="/FAQ" className="link link-hover">
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <nav className="flex gap-6">
          <ul className="footer-nav">
            <h6 className="footer-title">Company</h6>
            <li>
              <a href="/about" className="link link-hover">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/https://www.sixtusdev.net/#contact"
                target="_blank"
                className="link link-hover"
              >
                Contact
              </a>
            </li>
            <li>
              <a href="/career" className="link link-hover">
                Careers
              </a>
            </li>
          </ul>
        </nav>

        <nav className="flex gap-6">
          <ul className="footer-nav">
            <h6 className="footer-title">Legal</h6>
            <li>
              <a href="/terms" className="link link-hover">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="link link-hover">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/cookie" className="link link-hover">
                Cookie Policy
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex justify-between items-center flex-wrap bg-slate-100 text-base-content py-3 px-10">
        <Link href="/">
          <div className="flex justify-start items-center gap-2 logo p-2 rounded-xl">
            <Image src="/logo.png" alt="logo" width={30} height={30} />
            <span className="text-base font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              DevJourney
            </span>
          </div>
        </Link>

        <aside className="flex items-center justify-start flex-wrap gap-4">
          <div className="flex justify-center items-center gap-4">
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              className="link link-hover"
            >
              <FaGithub size={24} className="social-icon" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              className="link link-hover"
            >
              <FaLinkedin size={24} className="social-icon" />
            </Link>
            <Link
              href="https://twitter.com/yourusername"
              target="_blank"
              className="link link-hover"
            >
              <FaTwitter size={24} className="social-icon" />
            </Link>
          </div>
        </aside>

        <p className="text-sm">
          DevJourney is a platform for developers to showcase their projects,
          skills, and journey. Join us to track your progress!
        </p>

        {/* <div className="divider"></div> */}
      </div>
    </section>
  );
};

export default Footer;
