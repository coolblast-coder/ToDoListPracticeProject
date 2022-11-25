import React from "react";

export default function TodoItem(props){
const {item} = props;
return(
    <li key={item.id} className="list-group-item">
            <div className="checkbox">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id={"todo-item-check-${item.id}"}
              />
              <label
                className="form-check-label"
                htmlFor={"todo-item-check-${item.id}"}
              >
                {item.text}
              </label>
            </div>
          </li>
)


}