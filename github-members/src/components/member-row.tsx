import React from "react";
import { MemberEntity } from "../model";
import { Link } from "react-router-dom";

interface Props {
  member: MemberEntity;
}

export const MemberRow: React.FC<Props> = (props) => {
  const { member } = props;
  return (
    <>
      <td className="align-middle">
        <img src={member.avatar_url} className="img-table" />
      </td>
      <td className="align-middle">
        <span>{member.id}</span>
      </td>
      <td className="align-middle">
        <Link to={`/detail/${member.login}`}>{member.login}</Link>
      </td>
    </>
  );
};
