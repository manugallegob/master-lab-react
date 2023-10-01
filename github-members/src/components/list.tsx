import React from "react";
import { MemberEntity } from "../model";
import { MemberRow } from "./member-row";
import { Pagination } from "../components/pagination";

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organizationName, setOrganizationName] = React.useState("lemoncode");
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalMembers: number = members.length;

  // Paginación
  const membersPerPage: number = 5;
  const lastIndex: number = currentPage * membersPerPage;
  const firstIndex: number = lastIndex - membersPerPage;

  const onSearch = (organizationName: string) => {
    fetch(`https://api.github.com/orgs/${organizationName}/members`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } 
          throw new Error("Error en la búsqueda de members");
        
      })
      .then(setMembers)
      .catch((error) => {
        alert('Nombre de empresa erróneo o no existente')
      });
    setCurrentPage(1);
  };

  React.useEffect(() => {
    onSearch(organizationName);
  }, []);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="row m-4">
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
          ></input>
        </div>
        <button
          className="btn btn-primary col-auto"
          onClick={(e) => onSearch(organizationName)}
        >
          Buscar
        </button>
      </form>

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <table className="table align-middle table-striped">
              <thead>
                <tr>
                  <th>Avatar</th>
                  <th>ID</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {members
                  .map((member) => {
                    return (
                      <tr key={member.id}>
                        <MemberRow member={member} />
                      </tr>
                    );
                  })
                  .slice(firstIndex, lastIndex)}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Pagination
        membersPerPage={membersPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalMembers={totalMembers}
      />
    </>
  );
};
