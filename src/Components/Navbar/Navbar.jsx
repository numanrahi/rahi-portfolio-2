import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleDownload = () => {
    const fileUrl = "Abdullah Al Numan Rahi.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.target = "_blank";
    link.download = "Abdullah Al Numan Rahi.pdf";

    link.click();
  };
  return (
    <div className="d-flex justify-content-between py-2 px-5">
      <section>Rahi</section>
      <section className="d-flex gap-5">
        <Link className="text-decoration-none">Home</Link>
        <Link className="text-decoration-none">Skills</Link>
        <Link className="text-decoration-none">Projects</Link>
        <Link className="text-decoration-none">Contact</Link>
      </section>
      <section onClick={handleDownload} className="btn btn-cus text-white">
        Resume
      </section>
    </div>
  );
};

export default Navbar;
