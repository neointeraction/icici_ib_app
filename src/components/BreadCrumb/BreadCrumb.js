import React from 'react';
import { Link } from 'react-router-dom';


function BreadCrumb(props) {

  function isLast(index) {
    return index === props.crumbs.length - 1;
  }

  return (
    <nav>
      <ol className='breadcrumbs'>
        {
          props.crumbs.map((crumb, ci) => {
            const disabled = isLast(ci) ? 'brd-disabled' : '';
            
            return (
              <li
                key={ ci }
              >
                <a href="#/funds" className={ `brdcrmb-item ${ disabled }` } onClick={ () => props.selected(crumb) }>
                  { crumb }
                </a>
              </li>
            );
          })
        }
      </ol>
    </nav>
  );
}

export default BreadCrumb;