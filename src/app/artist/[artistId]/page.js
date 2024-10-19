import React from 'react'

export default function ArtistSinglePage({ params }) {

    console.log(params);

    return (
        <div>{params.artistId}</div>
    )
}
