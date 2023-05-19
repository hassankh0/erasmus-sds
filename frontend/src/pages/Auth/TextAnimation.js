import React from "react";

const TextAnimation = () => {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                'Some <i>strings</i> are slanted',
                'Some <strong>strings</strong> are bold',
                'HTML characters &times; &copy;'
            ],
            typeSpeed: 50,
            backSpeed: 50,
        };

        // elRef refers to the <span> rendered below
        typed.current = new typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        };
    }, []);
    return (
        <div className="wrap">
            <h1>Typed.js</h1>

            <div className="type-wrap">
                <span style={{ whiteSpace: 'pre' }} ref={el} />
            </div>

        </div>
    );
};

export default TextAnimation;