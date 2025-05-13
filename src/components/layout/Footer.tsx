import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-restaurant-brown text-restaurant-cream pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & About */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-playfair text-2xl font-bold">
                <span className="text-restaurant-gold">La</span>Saveur
              </span>
            </Link>
            <p className="mb-6 text-restaurant-cream/80 text-sm">
              Experience culinary excellence at its finest. Our chefs create
              memorable dining experiences with the freshest ingredients and
              artistic presentation.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-restaurant-cream hover:text-restaurant-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-restaurant-cream hover:text-restaurant-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-restaurant-cream hover:text-restaurant-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h4 className="text-restaurant-gold font-playfair text-lg mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-restaurant-gold shrink-0 mt-0.5" />
                <span className="text-sm">
                  123 Gourmet Avenue, Culinary District, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-restaurant-gold" />
                <a
                  href="tel:+14155552671"
                  className="text-sm hover:text-restaurant-gold transition-colors">
                  (415) 555-2671
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-restaurant-gold" />
                <a
                  href="mailto:info@lasaveur.com"
                  className="text-sm hover:text-restaurant-gold transition-colors">
                  info@lasaveur.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Opening Hours */}
          <div>
            <h4 className="text-restaurant-gold font-playfair text-lg mb-4">
              Opening Hours
            </h4>
            <ul className="space-y-2">
              <li className="flex justify-between text-sm">
                <span>Monday - Thursday</span>
                <span>12:00 - 22:00</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Friday - Saturday</span>
                <span>12:00 - 23:00</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Sunday</span>
                <span>12:00 - 21:00</span>
              </li>
              <li className="flex items-center pt-3 text-restaurant-gold text-sm">
                <Clock className="mr-2 h-4 w-4" />
                <span>Kitchen closes 1 hour before</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h4 className="text-restaurant-gold font-playfair text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                "Menu",
                // "Reservations",
                // "Private Events",
                // "Gift Cards",
                // "Careers",
                // "Privacy Policy",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm hover:text-restaurant-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-restaurant-cream/10 mt-12 pt-8 text-sm text-restaurant-cream/60 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} La Saveur. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-restaurant-gold mr-6">
              Terms of Service
            </a>
            <a href="#" className="hover:text-restaurant-gold">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
