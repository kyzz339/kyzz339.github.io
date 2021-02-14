$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        { 
            image: 'assets/images/usedthing.PNG',
            link: 'https://github.com/kyzz339/usedthing',
            title: 'Usedthing',
            /*demo: 'https://mporter.co',*/
            technologies: ['Spring Framework','Mysql','RestAPI'],
            description: "사용자간 중고거래를 더 쉽게 중개해주는 웹사이트\n" +
            			 "회원CRUD, 이메일 인증 서비스, kakao우편번호 서비스" +
            			 "상품 CRUD, 상품댓글, 쪽지서비스, ",
            categories: ['featured', 'webdev']
        },
        
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div><br>
                    <div class="git_button">
                    	<a class="semi-transparent-button1 with-border nav-links" href="${project.link}">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}