function Banner() {

    const slides = [
        {
            url: 'https://baothainguyen.vn/file/oldimage/baothainguyen/UserFiles/image/d1(21).jpg'
        },
        {
            url: '/assets/feedback-2.jpg'
        },
        {
            url: '/assets/feedback-3.jpg'
        },
        {
            url: '/assets/feedback-4.jpg'
        },
    ];
    console.log(slides[0].url);
    return (
        <div>
            <div className="ct-subheadline">
                <div className="ct-subheadline-deco-line"></div>
                <div className="ct-subheadline-label">Banner ưu đãi</div>
                <div className="ct-subheadline-deco-line"></div>
            </div>

            <div className="Banner w-[90%] relative">
                <div  style={{ backgroundImage: `url('${slides[0].url}')` }} className="w-[70%] rounded-2xl bg-center bg-cover duration-500">
                   
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<Banner />, document.getElementById('banner-container'));