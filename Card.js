import React from 'react'

function Card(props) {
    return (
        <div className='row'>
            <div className='col-md-4'>

                <div class="card mb-3">
                    <img src={props.url} style={{ width: 100, height: 100 }} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{props.name}</h5>
                        <p class="card-text">{props.message}</p>
                        <p class="card-text"><small class="text-muted">{props.time}</small></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card