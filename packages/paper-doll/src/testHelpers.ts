export const setupImageMock = () => {
    const originalImage = window.Image;
    function MockImage() {
        this.onload = null;
        this.onerror = null;
        this.src = '$$null$$';

        // this is a hacky way to handle the race condition but I can't think of a better way
        setInterval(() => {
            if (this.onload && this.src !== '$$null$$') {
                if (this.src === "fakeSource.jpg") {
                    if (typeof this.onerror === 'function') {
                        this.onerror();
                    }
                } else if (this.src > '') {
                    if (typeof this.onload === 'function') {
                        this.onload();
                    }
                }
            }
        }, 10);
    }
    // @ts-ignore - this is a limited mock, so it's ok to ignore the type
    window.Image = MockImage;

    return () => {
        window.Image = originalImage;
    };
};
