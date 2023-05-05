import { Col } from "react-bootstrap";
import { BoxArrowRight } from "react-bootstrap-icons";

export const ProjectCard = ({ openWeb, title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="img" />
        <div className="proj-txtx">
          <h4 className="navigate_link cursor-pointer" onClick={openWeb} >{title}  <BoxArrowRight size={20} /></h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
