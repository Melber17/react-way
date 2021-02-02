import React, {useState} from 'react';


const ProfileStatusWithHooks = (props) => {
   let [editMode, setEditMode] =useState(false);
   let [status, setStatus] =useState(props.status);
   const activateEditMode = () => {
    setEditMode(true)
   }
   const deactivateEditMode = () => {
   setEditMode(false)
       this.props.updateStatus(this.state.status)
       props.updateStatus(status)
   }
   const onStatusChange = (e) => {
       setStatus(e.currentTarget.value)
   }
    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode} >{props.status || "---------------"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input value={status} onChange={onStatusChange} onBlur={this.deactivateEditMode}  autoFocus value={""}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;