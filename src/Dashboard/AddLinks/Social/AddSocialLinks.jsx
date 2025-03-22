import React, { useState, useEffect } from "react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaSnapchat,
  FaTelegram,
  FaTiktok,
  FaTumblr,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialModal from "./SocialModal";

const AddSocialLinks = () => {
  const [open, setOpen] = useState(false);
  const [modalName, setModalName] = useState("");
  const [modalIcon, setModalIcon] = useState(<></>);
  const [addedLinks, setAddedLinks] = useState({});

  const socials = [
    { id: "01", icon: <FaFacebook className="text-4xl" />, name: "Facebook" },
    { id: "02", icon: <FaLinkedin className="text-4xl" />, name: "Linkedin" },
    { id: "03", icon: <FaTwitter className="text-4xl" />, name: "Twitter" },
    { id: "04", icon: <FaWhatsapp className="text-4xl" />, name: "Whatsapp" },
    { id: "05", icon: <FaYoutube className="text-4xl" />, name: "Youtube" },
    { id: "06", icon: <FaDiscord className="text-4xl" />, name: "Discord" },
    { id: "07", icon: <FaSnapchat className="text-4xl" />, name: "Snapchat" },
    { id: "08", icon: <FaTelegram className="text-4xl" />, name: "Telegram" },
    { id: "09", icon: <FaTiktok className="text-4xl" />, name: "Tiktok" },
    { id: "10", icon: <FaPinterest className="text-4xl" />, name: "Pinterest" },
    { id: "11", icon: <FaInstagram className="text-4xl" />, name: "Instagram" },
    { id: "12", icon: <FaTumblr className="text-4xl" />, name: "Tumblr" },
  ];

  useEffect(() => {
    fetch("http://localhost:5000/api/links/get-social")
      .then((res) => res.json())
      .then((data) => {
        const storedLinks = {};
        data.forEach((link) => {
          storedLinks[link.name] = link.url;
        });
        setAddedLinks(storedLinks);
      })
      .catch((error) => console.error("Error fetching social links:", error));
  }, []);

  const handleLinkClick = (social) => {
    if (addedLinks[social.name]) return;
    setModalIcon(social.icon);
    setModalName(social.name);
    setOpen(true);
  };

  const handleLinkSubmit = (name, url) => {
    setAddedLinks((prev) => ({
      ...prev,
      [name]: url,
    }));
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold text-center">Add social links</h2>
      <div className="bg-white mt-4 flex flex-wrap items-center justify-center gap-6">
        {socials.map((social) => (
          <Link
            onClick={() => handleLinkClick(social)}
            key={social.id}
            className={`social-icon rounded-[7px] border p-2 ${
              addedLinks[social.name]
                ? "border-orange-500 text-orange-500 cursor-not-allowed"
                : "border-gray-400 text-gray-400 cursor-pointer"
            }`}
          >
            {social.icon}
          </Link>
        ))}
      </div>
      {open && (
        <SocialModal
          setOpen={setOpen}
          modalName={modalName}
          modalIcon={modalIcon}
          handleLinkSubmit={handleLinkSubmit}
        />
      )}
    </div>
  );
};

export default AddSocialLinks;
