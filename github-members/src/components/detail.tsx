import React from "react";
import { Link, useParams } from "react-router-dom";

interface MemberDetailEntity {
  avatar_url: string;
  id: string;
  login: string;
  name: string;
  company: string;
  bio: string;
}

const createDefaultMemberDetail = () => ({
  avatar_url: "",
  id: "",
  login: "",
  name: "",
  company: "",
  bio: "",
});

export const DetailPage: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity>(
    createDefaultMemberDetail()
  );
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setMember(json));
  }, []);

  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="card w-25">
        <img src={member.avatar_url} alt="" className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">User Id: {id}</h3>
          <span className="d-block"> id: {member.id}</span>
          <span className="d-block"> login: {member.login}</span>
          <span className="d-block"> name: {member.name}</span>
          <span className="d-block"> comspanany: {member.company}</span>
          <span className="d-block"> bio: {member.bio}</span>
          <Link to="/list" className="btn btn-primary mt-3">Back to list page</Link>
        </div>
      </div>
    </div>
  );
};
