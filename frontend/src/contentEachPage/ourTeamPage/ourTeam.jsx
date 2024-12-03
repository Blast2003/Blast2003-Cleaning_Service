import React from "react";
import "./ourTeam.css";
import { useRecoilValue } from "recoil";
import customerAtom from "../../atom/customerAtom";
import { Link } from "react-router-dom";

import staff1 from "../../assets/staff1.png";
import staff2 from "../../assets/staff2.png";
import staff3 from "../../assets/staff3.png";
import staff4 from "../../assets/staff4.png";

function OurTeam() {
  const customer = useRecoilValue(customerAtom);

  // Define staff data and dynamic links
  const staffData = [
    { id: "staff1", name: "Samantha Lee", title: "Senior Carpet Cleaning Technician", image: staff1, bio: "With 8+ years in carpet cleaning, Samantha specializes in both steam and dry cleaning. She’s certified in advanced stain removal and fabric care, ensuring every step of the process is meticulously done. Known for eco-friendly solutions, she handles both residential and commercial properties, bringing carpets back to life.", experience:"Expert in stain removal, steam/dry cleaning, and fabric care, with a focus on high-end residential and commercial properties."},
    { id: "staff2", name: "James Wang", title: "Upholstery & Furniture Care Specialist", image: staff2, bio: "James brings 7 years of expertise in cleaning and maintaining upholstered furniture, including high-end brands. Skilled in fabric and leather care, he offers spot cleaning, deep upholstery treatments, and conditioning to keep furniture fresh and durable.", experience:"Specialist in upholstery care, with extensive work in both residential and commercial settings, including luxury furniture cleaning." },
    { id: "staff3", name: "Emily Davis", title: "Senior Wall Care & Cleaning Technician", image: staff3, bio: "Emily has 6 years of experience in wall care, specializing in maintaining painted, wallpapered, and tiled surfaces. She ensures dirt, grime, and stains are removed without damaging the walls, using non-toxic solutions and steam cleaners. Her work spans both residential and commercial properties.", experience:"Expertise in wall cleaning for various surfaces, with a focus on residential and commercial properties, ensuring damage-free results." },
    { id: "staff4", name: "Michael Brown", title: "Floor Care Specialist", image: staff4, bio: "With over 10 years in floor cleaning, Michael excels at caring for hardwood, tile, laminate, and carpeted floors. He specializes in sweeping, mopping, scrubbing, polishing, and rug cleaning, leaving floors immaculate. His professional approach ensures durable, long-lasting floor care.", experience:"Expert in floor care, including wood floors and rugs, with extensive experience in both residential and commercial properties." },
  ];

  return (
    <div className="container">
      <div className="member-list-header">
        <h5 className="our-staff">⭐Our Staff</h5>
        <h2 className="meet-staff">Meet Our Cleaning Staff</h2>
      </div>

      <section className="cleaning-staff">
        <div className="staff-members">
          {staffData.map((staff) => (
            <div className="staff-member" key={staff.id}>
            <Link
              to={`${
                customer ? `/customer/staffDetails/${staff.id}` : `/staffDetails/${staff.id}`
              }`}
              state={{ staff: staff.image, name: staff.name, title: staff.title, bio: staff.bio, experience: staff.experience }}
            >

                <img src={staff.image} alt={staff.name} className="member-image" />
                <div className="member-description">
                  <h3>{staff.name}</h3>
                  <p>{staff.title}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default OurTeam;
