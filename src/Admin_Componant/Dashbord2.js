import React from 'react'

export const Dashbord2 = () => {
  return (
    <div> <div className="position">
    {/* Content Wrapper. Contains page content */}
    <div className="content-wrapper ">
      {/* Content Header (Page header) */}
      <div className="content-header ">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Dashboard</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Admin</li>
              </ol>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      <section className="content ">
        <div className="container-fluid ">
          
          <div className="row  ">
            {/* Left col */}
            <section className="col-lg-7 connectedSortable">
              
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Responsive Hover Table</h3>
                      <div className="card-tools">
                        <div
                          className="input-group input-group-sm"
                          style={{ width: 200}}
                        >
                          <input
                            type="text"
                            name="table_search"
                            className="form-control float-right"
                            placeholder="Search"
                          />
                          <div className="input-group-append">
                            <button type="submit" className="btn btn-default">
                              <i className="fas fa-search" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.card */}
                </div>
              </div>

            </section>
            {/* /.Left col */}
            {/* right col (We are only adding the ID to make the widgets sortable)*/}
            
          </div>
          {/* /.row (main row) */}
        </div>
        {/* /.container-fluid */}
      </section>
      {/* /.content */}
    </div></div></div>
  )
}
