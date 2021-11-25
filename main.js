try {
    const dripB = document.getElementsByClassName('dripping-bottom')[0];
    const dripT = document.getElementsByClassName('dripping-top')[0];
    if (dripB && dripT) {
        for (var i = 0; i < 100; i++) {
            var d1 = document.createElement('div');
            var d2 = document.createElement('div');
            dripT.append(d1)
            dripB.append(d2)
        }
    }
} catch (e) {
    console.log("Failed to add dripping effect")
}

const footerEl = document.getElementsByTagName('footer')[0];
footerEl.setAttribute('class', 'container-fluid bg-secondary text-light py-4');
footerEl.innerHTML = `
<!-- row 1  -->
<div class="row">
    <div class="col-lg">
        <h3>Work with us</h3>
        <p class="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aperiam ipsum ad? Perspiciatis ducimus
            rerum neque, consequatur pariatur ratione voluptates tenetur corrupti voluptas eius nulla,
            perferendis autem quis, delectus cumque.
        </p>
    </div>
    <div class="col-lg">
        <h3>Contact Information</h3>
        <p class="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aperiam ipsum ad? Perspiciatis ducimus
            rerum neque, consequatur pariatur ratione voluptates tenetur corrupti voluptas eius nulla,
            perferendis autem quis, delectus cumque.
        </p>
    </div>
    <div class="col-lg">
        <h3>Social Media</h3>
        <div class="row social-media">
            <div class="col"><img
                    src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg">
            </div>
            <div class="col"><img
                    src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg">
            </div>
            <div class="col"><img
                    src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg">
            </div>
        </div>
        <div class="row social-media">
            <div class="col"><img
                    src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg">
            </div>
            <div class="col"><img
                    src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg">
            </div>
            <div class="col"><img
                    src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg">
            </div>
        </div>
    </div>
    <div class="col-lg">
        <h3>Subscription</h3>
        <div>
            <label for="email">Subscribe to our Newsletter</label>
            <input type="email" class="form-control mb-4" name="email" placeholder="example@email.com">
            <button class="btn btn-success" onclick="alert('Thank you for Subscribing!')">Submit</button>
        </div>
    </div>
</div>

<hr />

<!-- row 2  -->
<div class="row">
    <div class="col-lg">
        <img width="200px"
            src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg">
    </div>
    <div class="col-lg">
        <img width="200px"
            src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg">
    </div>
    <div class="col-lg">
        <h3>Citations</h3>
        <p class="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aperiam ipsum ad? Perspiciatis ducimus
            rerum neque, consequatur pariatur ratione voluptates tenetur corrupti voluptas eius nulla,
            perferendis autem quis, delectus cumque.
        </p>
    </div>
    <div class="col-lg">
        <h3>Designer</h3>
        <p class="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aperiam ipsum ad? Perspiciatis ducimus
            rerum neque, consequatur pariatur ratione voluptates tenetur corrupti voluptas eius nulla,
            perferendis autem quis, delectus cumque.
        </p>
    </div>
`