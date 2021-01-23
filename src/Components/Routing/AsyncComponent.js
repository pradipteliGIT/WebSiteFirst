import React,{Suspense} from 'react';

export default function AsyncComponent(Component){
    return props=>(
        <Suspense fallback={<div>Loading....</div>}>
            <Component {...props}/>
        </Suspense>
    )
}