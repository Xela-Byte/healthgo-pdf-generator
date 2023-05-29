import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useEffect, useRef } from "react";
import Certificate from "../assets/images/healthgo_certificate.jpg";
import useQueryParams from "../hooks/useQueryParams";
import { HomeContent } from "../styled/HomeStyled";

const HomePage = () => {
  const certificateRef = useRef(null);

  let params = useQueryParams();

  let { name, courseTitle } = params;

  const handleDownload = () => {
    html2canvas(certificateRef?.current)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const certificatePDF = new jsPDF("1", "mm", [1000, 670]);
        certificatePDF.addImage(imgData, "JPG", 0, 0, 1000, 667);
        certificatePDF.save(
          `${name?.split(" ").join("_")}-${courseTitle
            ?.split(" ")
            .join("_")}_${Math.floor(Math.random() * 10000)}`
        );
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    if (name && courseTitle) {
      handleDownload();
    }
  }, [name, courseTitle]);

  const todayDate = new Date().toLocaleDateString();
  return (
    <>
      <HomeContent ref={certificateRef}>
        <img
          src={Certificate}
          alt="certificate"
        />
        <p className="name">{name}</p>
        <p className="course">{courseTitle}</p>
        <p className="date">{todayDate}</p>
      </HomeContent>
    </>
  );
};

export default HomePage;
