import React from 'react'

const Formregister = () => {
    return (
        <div style={{ marginTop: "100px" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h3 class="text-center p-2">Form Register</h3>
                        <div className="card p-4">
                            <div className="card-body">
                                <h5 class="card-title text-center">Tugas Pertemuan Ketiga</h5>
                                <div className='form-group p-2'>
                                    <label>Nama</label>
                                    <input placeholder=" Masukkan Nama" className="form-control"></input>
                                </div>
                                <div className='form-group p-2'>
                                    <label>Username</label>
                                    <input placeholder=" Masukkan Username" className="form-control"></input>
                                </div>
                                <div className='form-group p-2'>
                                    <label>Email</label>
                                    <input placeholder=" Masukkan Email" className="form-control"></input>
                                </div>
                                <div className='form-group p-2'>
                                    <label>Nomor HP</label>
                                    <input placeholder=" Masukkan Nomor HP" className="form-control"></input>
                                </div>
                                <div className='form-group p-2'>
                                    <label>Password</label>
                                    <input type="password" placeholder="6-20 charakter" className="form-control"></input>
                                </div>
                                <div className='form-group p-2'>
                                    <label>Confirm Password</label>
                                    <input type="re-password" placeholder="konfirmasi password" className="form-control"></input>
                                </div>

                                

                                <div className='d-grid gap-2 p-2'>
                                    <div class="form-check-center text-center">
                                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                                        <label class="form-check-label" for="invalidCheck">
                                            Remember Me
                                        </label>
                                        <div class="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div>
                                </div>
                                <div className='d-grid gap-2 p-2'>
                                    <a href="#" class="btn btn-success">Register</a>
                                </div>
                                <div className='d-grid gap-2 p-2'>
                                    <a href="#" class="btn btn-danger">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formregister;