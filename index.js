window.addEventListener('DOMContentLoaded', () => {
    // dropdown 
    document.addEventListener('click',e =>{
        const isDropdownBtn = e.target.matches('[data-dropdown-btn]')
        if(!isDropdownBtn && e.target.closest('[data-dropdown]') !== null ) return;
        let currentDropdown;
        if(isDropdownBtn){
            currentDropdown = e.target.closest('[data-dropdown]')
            currentDropdown.classList.toggle('active-dropdown')
        }
        document.querySelectorAll('[data-dropdown].active-dropdown').forEach(dropdown => {
            if(dropdown === currentDropdown) return
            dropdown.classList.remove('active-dropdown')
        })
    })
    // slide slick
    
    $(document).ready(function(){
        $('.slide-banner').slick({
            speed: 1000,
            slidesToShow: 1,
            dots: true,
            accessibility: true,
            autoplay: true,
            prevArrow: `<div class="slide-banner__btn-prev">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </div>`,
            nextArrow: `<div class="slide-banner__btn-next">
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>`,

        });
        $('.course-list').slick({
            speed: 500,
            slidesToShow: 3,
            draggable: true,
            infinite: true,
            accessibility: true,
            autoplay: true,
            prevArrow: `<div class="slide-banner__btn-prev">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </div>`,
            nextArrow: `<div class="slide-banner__btn-next">
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>`,

        });
        $('.blog-list').slick({
            speed: 500,
            slidesToShow: 3,
            accessibility: true,
            draggable: true,
            infinite: true,
            autoplay: true,
            prevArrow: `<div class="slide-banner__btn-prev">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </div>`,
            nextArrow: `<div class="slide-banner__btn-next">
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>`,

        });
        $('.trending-list').slick({
            speed: 500,
            draggable: true,
            infinite: true,
            slidesToShow: 3,
            accessibility: true,
            prevArrow: `<div class="slide-banner__btn-prev">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </div>`,
            nextArrow: `<div class="slide-banner__btn-next">
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>`,
        });
    });

    //course list 
    const courseList = document.querySelector('.course-list');
    const blogList = document.querySelector('.blog-list');
    const strendingList = document.querySelector('.trending-list');
    const app = {
        courses: [
            {
                name: 'HTML,CSS từ Zero đến Hero',
                image: 'https://img.youtube.com/vi/R6plN3FvzFY/sddefault.jpg',
                path: '/course',
                count: '69.911',
            },
            {
                name: 'HTML,CSS Tips & Tricks',
                image: 'https://img.youtube.com/vi/nB6cJh_bb1U/sddefault.jpg',
                path: '/course',
                count: '9.500',
            },
            {
                name: 'Responsive Với Grid System',
                image: 'https://img.youtube.com/vi/HYy4c6lcOlM/sddefault.jpg',
                path: '/course',
                count: '14.000',
            },
            {
                name: 'Javascript Cơ Bản',
                image: 'https://img.youtube.com/vi/0SJE9dYdpps/sddefault.jpg',
                path: '/course',
                count: '45.000',
            },
            {
                name: 'Javascript Nâng cao',
                image: 'https://img.youtube.com/vi/MGhw6XliFgo/sddefault.jpg',
                path: '/course',
                count: '7.800',
            },
            {
                name: 'Khóa học ReacJS',
                image: 'https://img.youtube.com/vi/x0fSBAgBrOQ/sddefault.jpg',
                path: '/course',
                count: '7.000',
            },
            {
                name: 'Kiến thức nền tảng',
                image: 'https://img.youtube.com/vi/zoELAirXMJY/sddefault.jpg',
                path: '/course',
                count: '40.000',
            },
            {
                name: 'Khóa NodeJS & ExpressJS',
                image: 'https://img.youtube.com/vi/HdVOT7Neh18/sddefault.jpg',
                path: '/course',
                count: '14.000',
            },
        ],
        blogs: [
            {   
                avatar: 'https://fullstack.edu.vn/assets/images/nobody_m.256x256.jpg',
                name: 'Name H',
                image: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/707/6155ed6c19af9.png',
                desc: 'GenZ theo ngành IT và suy nghĩ hơi hơi sai lệch 😗',
                path: '/course'
            },
            {   
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14GjZYb7BRB_PdGRMf6XZC-yrWB-gHse1uyawoD-BNw=s400',
                name: 'Sơn Đặng',
                image: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/279/6153f6932dcea.jpg',
                desc: '[Phần 1] Tạo dự án ReactJS với Webpack và Babel',
                path: '/course'
            },
            {   
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14Ghw8jjd_WRgi93wNdv8HaQS1OYXHP6oSTwNzpRfqA=s400',
                name: 'Long Nguyen',
                image: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/663/61532c6d1d11c.gif',
                desc: '[Cơ bản] Tổng quan lập trình Synchronous và Asynchronous',
                path: '/course'
            },
            {   
                avatar: 'https://lh3.googleusercontent.com/a-/AOh14GjZYb7BRB_PdGRMf6XZC-yrWB-gHse1uyawoD-BNw=s400',
                name: 'Super dev',
                image: 'https://cdn.fullstack.edu.vn/f8-learning/blog_posts/625/6150c6f84c260.png',
                desc: '[Cơ bản] Tổng quan lập trình Synchronous và Asynchronous',
                path: '/course'
            },
        ],
        trendings: [
            {
                name: 'Sinh viên IT đi thực tập cần biết những gì? | Đi thực tập cần chuẩn bị những gì? | Thực tập IT',
                image: 'https://img.youtube.com/vi/YH-E4Y3EaT4/sddefault.jpg',
                view: '133.547',
                like: '3.700',
                comment: '196',
            },
            {
                name: 'Code Thiếu Nhi Battle" Tranh Giành Trà Sữa Size L',
                image: 'https://img.youtube.com/vi/sgq7BH6WxL8/sddefault.jpg',
                view: '140.664',
                like: '3.300',
                comment: '154',
            },
            {
                name: 'Sinh viên IT đi thực tập cần biết những gì? | Đi thực tập cần chuẩn bị những gì? | Thực tập IT',
                image: 'https://img.youtube.com/vi/DpvYHLUiZpc/sddefault.jpg',
                view: '38.754 ',
                like: '1.900',
                comment: '198',
            },
            {
                name: 'Sinh viên IT đi thực tập cần biết những gì? | Đi thực tập cần chuẩn bị những gì? | Thực tập IT',
                image: 'https://img.youtube.com/vi/ZGmpvhqYSDU/sddefault.jpg',
                view: '14.993',
                like: '1.800',
                comment: '398',
            },
        ],
        renderCourses(){
            const htmls = this.courses.map(course => {
                return `
                    <div class="course-item">
                        <div class="course-link">
                            <a href="${course.path}" class="course-img" style="background-image: url(${course.image})"></a>
                        </div>
                        <div class="course-title heading-sm">${course.name}</div>
                        <div class="course-subrise"><ion-icon name="people"></ion-icon>${course.count}</div>
                    </div>
                `
            }).join('');
            if(courseList){
                courseList.innerHTML = htmls;
            }
        },
        renderBlog(){
            const htmls = this.blogs.map(blog => {
                return `
                    <div class="blog-item">
                        <div class="blog-link">
                            <a href="${blog.path}" class="blog-img" style="background-image: url(${blog.image})"></a>
                        </div>
                        <div class="blog-title heading-sm">${blog.desc}</div>
                        <div class="blog-author">
                            <a href="${blog.path}" class="blog-author-avatar">
                                <img src="${blog.avatar}" class="blog-author-img">
                            </a>
                            <a href="${blog.path}" class="blog-author-name">${blog.name}</a>
                            <span class="post-time">2 giờ trước</span>
                        </div>
                    </div>
                
                `
            }).join('');
            if(blogList){
                blogList.innerHTML = htmls;
            }
        },
        renderTrendings(){
            const htmls = this.trendings.map((trending) => `
                <div class="trending-item">
                <div href="#!" class="trending-link">
                    <a href="#!" class="trending-img" style="background-image: url(${trending.image})"></a>
                </div>
                <div class="heading-sm trending-heading">${trending.name}</div>
                <div class="trending-desc">
                    <ul class="trending-desc__list">
                        <li class="trending-desc__item">
                            <ion-icon name="eye"></ion-icon>
                            ${trending.view}
                        </li>
                        <li class="trending-desc__item">
                            <ion-icon name="thumbs-up-sharp"></ion-icon>
                            ${trending.like}
                        </li>
                        <li class="trending-desc__item">
                            <ion-icon name="chatbubbles"></ion-icon>
                            ${trending.comment}
                        </li>
                    </ul>
                </div>
                </div>
            
            
            `).join('')
            if(strendingList){
                strendingList.innerHTML = htmls;
            }
        },
        start(){
            this.renderCourses();
            this.renderBlog();
            this.renderTrendings();
        }
    }
    app.start()




});
