// import React, { useState } from "react";
// import "./HomePage6.css";
// import InputCard from "../../Atoms/InputCard/InputCard";
// import icon from "../../../assets/HomePage/sendsvg.svg";

// const HomePage6 = () => {
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   const handleCheckboxChange = (option) => {
//     setSelectedOptions((prev) =>
//       prev.includes(option)
//         ? prev.filter((item) => item !== option)
//         : [...prev, option]
//     );
//   };

//   return (
//     <div className="HomePage6Container container">
//       <div className="HomePage6UpperBlock">
//         <h2>Send Me A Message!</h2>
//         <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
//       </div>
//       <div className="HomePage6LowerBlock">
//         <div className="HomePage6Lowerone">
//           <InputCard title={"Full Name"} />
//           <InputCard title={"Email"} />
//         </div>
//         <div className="HomePage6Lowertwo">
//           <div className="p-4 text-white rounded-lg w-96 radioOptions">
//             <h2 className=" HomePage6Lowertitle">Why are you contacting us?</h2>
//             <div className="space-y-2 radioOptionSub">
//               {[
//                 "Web Development",
//                 "App Development",
//                 "Freelance",
//                 "Others",
//               ].map((option) => (
//                 <label key={option} className="HomePage6LowerOptionsub">
//                   <input
//                     type="checkbox"
//                     name="contactReason"
//                     value={option}
//                     checked={selectedOptions.includes(option)}
//                     onChange={() => handleCheckboxChange(option)}
//                     className="inputcheckbox"
//                   />
//                   <span>{option}</span>
//                 </label>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="HomePage6Lowerthird">
//           <div className="InputCardContainer InputCardContainerCustom">
//             <div className="InputCardTitle">
//               <p>Your Message</p>
//             </div>
//             <div className="InputCardInput">
//               <input type="text" placeholder="Type here" />
//             </div>
//           </div>
//         </div>
//         <div className="HomePage6Lowerfourth">
//           <div className="githubbtn githubbtn1 github-link">
//               <p>Contact </p>
//               <img src={icon} alt={icon} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage6;

// import React, { useState } from "react";
// import "./HomePage6.css";
// import InputCard from "../../Atoms/InputCard/InputCard";
// import icon from "../../../assets/HomePage/sendsvg.svg";

// const HomePage6 = () => {
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleCheckboxChange = (option) => {
//     setSelectedOptions((prev) =>
//       prev.includes(option)
//         ? prev.filter((item) => item !== option)
//         : [...prev, option]
//     );
//   };

//   const handleSubmit = async () => {
//     const fullName = document.querySelector("#fullName").value.trim();
//     const email = document.querySelector("#email").value.trim();
//     const message = document.querySelector("#message").value.trim();
//     const reasons = selectedOptions.length ? selectedOptions : [];

//     if (!fullName || !email || !message || !reasons.length) {
//       console.error("All fields are required");
//       alert("Please fill all fields");
//       return;
//     }

//     const formData = { fullName, email, message, reasons };
//     console.log("Sending Data:", formData); // Debugging log

//     try {
//       const response = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       console.log("Response:", data); // Debugging log

//       if (data.success) {
//         alert("Message sent successfully!");
//       } else {
//         alert("Error: " + data.error);
//       }
//     } catch (error) {
//       console.error("Error sending request:", error);
//     }
//   };

//   return (
//     <div className="HomePage6Container container">
//       <div className="HomePage6UpperBlock">
//         <h2>Send Me A Message!</h2>
//         <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
//       </div>
//       <div className="HomePage6LowerBlock">
//         <div className="HomePage6Lowerone">
//           <InputCard
//             title={"Full Name"}
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//           />
//           <InputCard
//             title={"Email"}
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="HomePage6Lowertwo">
//           <div className="p-4 text-white rounded-lg w-96 radioOptions">
//             <h2 className="HomePage6Lowertitle">Why are you contacting us?</h2>
//             <div className="space-y-2 radioOptionSub">
//               {[
//                 "Web Development",
//                 "App Development",
//                 "Freelance",
//                 "Others",
//               ].map((option) => (
//                 <label key={option} className="HomePage6LowerOptionsub">
//                   <input
//                     type="checkbox"
//                     name="contactReason"
//                     value={option}
//                     checked={selectedOptions.includes(option)}
//                     onChange={() => handleCheckboxChange(option)}
//                     className="inputcheckbox"
//                   />
//                   <span>{option}</span>
//                 </label>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="HomePage6Lowerthird">
//           <div className="InputCardContainer InputCardContainerCustom">
//             <div className="InputCardTitle">
//               <p>Your Message</p>
//             </div>
//             <div className="InputCardInput">
//               <input
//                 type="text"
//                 placeholder="Type here"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="HomePage6Lowerfourth">
//           <button
//             className="githubbtn githubbtn1 github-link"
//             onClick={handleSubmit}
//             disabled={loading}
//           >
//             {loading ? "Sending..." : "Contact"}
//             <img src={icon} alt="send icon" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage6;

import React, { useState, useEffect } from "react";
import "./HomePage6.css";
import InputCard from "../../Atoms/InputCard/InputCard";
import icon from "../../../assets/HomePage/sendsvg.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage6 = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    reasons: [],
  });

  // Retrieve theme from localStorage
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    // Listen for theme changes from localStorage
    const handleStorageChange = () => {
      setTheme(localStorage.getItem("theme") || "dark");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (option) => {
    setFormData((prev) => ({
      ...prev,
      reasons: prev.reasons.includes(option)
        ? prev.reasons.filter((item) => item !== option)
        : [...prev.reasons, option],
    }));
  };

  const API_BASE_URL = "https://portfolio-backend-uz32.onrender.com"; 


  const handleSubmit = async () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.message ||
      formData.reasons.length === 0
    ) {
      toast.error("⚠️ Please fill all fields!", { theme });
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        toast.success("Message sent successfully!", { theme });
        setFormData({ fullName: "", email: "", message: "", reasons: [] });
      } else {
        toast.error(result.error || "Failed to send message!", { theme });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong!", { theme });
    }
  };

  return (
    <div className={`HomePage6Container container ${theme}`}>
      <ToastContainer theme={theme} position="bottom-right" autoClose={3000} />

      <div className="HomePage6UpperBlock">
        <h2>Send Me A Message!</h2>
        <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
      </div>

      <div className="HomePage6LowerBlock">
        <div className="HomePage6Lowerone">
          <InputCard
            title="Full Name"
            value={formData.fullName}
            onChange={(val) => handleChange("fullName", val)}
          />
          <InputCard
            title="Email"
            value={formData.email}
            onChange={(val) => handleChange("email", val)}
          />
        </div>

        <div className="HomePage6Lowertwo">
          <div className="p-4 text-white rounded-lg w-96 radioOptions">
            <h2 className="HomePage6Lowertitle">Why are you contacting us?</h2>
            <div className="space-y-2 radioOptionSub">
              {[
                "Web Development",
                "App Development",
                "Freelance",
                "Others",
              ].map((option) => (
                <label key={option} className="HomePage6LowerOptionsub">
                  <input
                    type="checkbox"
                    name="contactReason"
                    value={option}
                    checked={formData.reasons.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="inputcheckbox"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="HomePage6Lowerthird">
          <div className="InputCardContainer InputCardContainerCustom">
            <div className="InputCardTitle">
              <p>Your Message</p>
            </div>
            <div className="InputCardInput">
              <input
                type="text"
                placeholder="Type here"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="HomePage6Lowerfourth">
          <div
            className="githubbtn githubbtn1 github-link"
            onClick={handleSubmit}
          >
            <p>Contact</p>
            <img src={icon} alt="send icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage6;
