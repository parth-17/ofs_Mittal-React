import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const UpdateProject_Module = () => {
  const id = useParams().id;

  const [projectList, setprojectList] = useState([]);
  const [statusList, setstatusList] = useState([]);

  const [project_moduleList, setproject_moduleList] = useState("");
  const [project, setproject] = useState(project_moduleList.project);
  const [moduleName, setmoduleName] = useState(project_moduleList.moduleName);
  const [projectModuleDescription, setprojectModuleDescription] = useState(
    project_moduleList.projectModuleDescription
  );
  const [projectModuleEstimatedHours, setprojectModuleEstimatedHours] =
    useState(project_moduleList.projectModuleEstimatedHours);
  const [status, setstatus] = useState(project_moduleList.status);
  const [projectModuleStartDate, setprojectModuleStartDate] = useState(
    project_moduleList.projectModuleStartDate
  );

  const getProject_ModuleData = () => {
    axios.get(`http://localhost:4000/project_modules/${id}`).then((res) => {
      console.log("axios.get called in updATE PROJECT MODULE", res.data.data);
      setproject_moduleList(res.data.data);
    });

    axios.get(`http://localhost:4000/projects`).then((res) => {
      setprojectList(res.data.data);
    });

    axios.get(`http://localhost:4000/status`).then((res) => {
      setstatusList(res.data.data);
    });
  };

  useEffect(() => {
    getProject_ModuleData();
  }, []);

  console.log("project modlu list", project_moduleList);

  const update = (e) => {
    e.preventDefault();

    var updatedData = {
      project: project,
      moduleName: moduleName,
      projectModuleDescription: projectModuleDescription,
      projectModuleEstimatedHours: projectModuleEstimatedHours,
      status: status,
      projectModuleStartDate: projectModuleStartDate,
    };

    axios
      .put(`http://localhost:4000/project_modules/${id}`, updatedData)
      .then((res) => {
        alert("updated data....");
      });
  };

  const projectChangeHandler = (e) => {
    setproject(e.target.value);
    console.log("project handler called");
  };

  const moduleNameChangeHandler = (e) => {
    setmoduleName(e.target.value);
  };

  const projectModuleDescriptionChangeHandlers = (e) => {
    setprojectModuleDescription(e.target.value);
  };

  const projectModuleEstimatedHoursChangeHandler = (e) => {
    setprojectModuleEstimatedHours(e.target.value);
  };

  const statusChangeHandler = (e) => {
    setstatus(e.target.value);
  };

  const projectModuleStartDateChangeHandler = (e) => {
    setprojectModuleStartDate(e.target.value);
  };

  console.log("projectModule: ", project_moduleList.moduleName);
  return (
    <div className="content">
      <div class="container-fluid">
        {project_moduleList.project !== undefined &&
        project_moduleList.status !== undefined ? (
          <form onSubmit={update}>
            <div class="form-group">
              <label for="exampleInputEmail1">Project</label>
              <select
                class="form-control"
                onChange={(e) => {
                  projectChangeHandler(e);
                }}
              >
                {projectList.map((project_module) => {
                  return (
                    <option value={project_module._id}>
                      {project_module.projectTitle}
                    </option>
                  );
                })}
              </select>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">ModuleName</label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => {
                  moduleNameChangeHandler(e);
                }}
                defaultValue={project_moduleList.moduleName}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Description</label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => {
                  projectModuleDescriptionChangeHandlers(e);
                }}
                defaultValue={project_moduleList.projectModuleDescription}
              />
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Estimated Hours</label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => {
                  projectModuleEstimatedHoursChangeHandler(e);
                }}
                defaultValue={project_moduleList.projectModuleEstimatedHours}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Status</label>

              <select
                class="form-control"
                onChange={(e) => {
                  statusChangeHandler(e);
                }}
              >
                {statusList.map((status) => {
                  return (
                    <option value={status._id}>{status.statusName}</option>
                  );
                })}
              </select>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Start Date</label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => {
                  projectModuleStartDateChangeHandler(e);
                }}
                defaultValue={project_moduleList.projectModuleStartDate}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
            <Link to="/AdminDashboard/Project_ModuleTable">
              <button type="button" className="btn btn-warning">
                Go Back
              </button>
            </Link>
          </form>
        ) : (
          "loading..."
        )}
      </div>
    </div>
  );
};
