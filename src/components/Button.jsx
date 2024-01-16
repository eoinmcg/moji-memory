import sfx from '../helpers/sfx';

export default function Button(props) {
    return (
        <>
            <a className={'btn ' + props.className}
                href={props.href ?? props.href}
                onClick={() => {
                    if (props.audio && props.audio === false) return;
                    sfx('click')
                }}>
                {props.name}
            </a>
        </>
    );
}
