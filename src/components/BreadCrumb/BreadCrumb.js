import React from 'react';


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
                <a href={props.selected} className={ `brdcrmb-item ${ disabled }` } >
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