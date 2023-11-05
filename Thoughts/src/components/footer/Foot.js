import React from 'react'
import './Foot.css'
export default function Foot() {
    const date=new Date();
  return (
  <div className="card text-center foot">
    <div className="card-header ">Vasanthakumar Kathiresan</div>
     <div className="card-body ">
        <h5 className="card-title">Not for comercial</h5>
     </div>
    <div class="card-footer text-body-secondary">Copyright &copy;{date.getFullYear()}</div>
</div>
  )
}
