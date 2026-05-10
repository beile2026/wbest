// ==================== 
// 技能数据
// ==================== 
const skillsData = [
    {
        id: 1,
        title: "React 开发",
        icon: "⚛️",
        category: "frontend",
        categoryText: "前端开发",
        description: "使用 React 构建现代化的用户界面，掌握 Hooks、Context、性能优化等核心技术。",
        keyPoints: [
            "深入理解 React Hooks 原理（useState, useEffect, useCallback, useMemo）",
            "掌握组件设计模式与组件复用策略",
            "熟悉 React Router 路由管理与代码分割",
            "实践性能优化（memo、懒加载、虚拟滚动）",
            "状态管理方案（Redux, Zustand, Context API）"
        ],
        experience: "在多个企业级项目中应用 React，包括大型管理系统、数据可视化平台等。通过代码分割和懒加载优化，将首屏加载时间减少 60%。",
        proficiency: 90,
        tags: ["React 18", "Hooks", "TypeScript", "性能优化"]
    },
    {
        id: 2,
        title: "Vue.js 开发",
        icon: "💚",
        category: "frontend",
        categoryText: "前端开发",
        description: "使用 Vue 3 组合式 API 开发响应式 Web 应用，熟练掌握 Vue 生态系统。",
        keyPoints: [
            "Vue 3 组合式 API 深度应用",
            "Vue Router 与 Vuex/Pinia 状态管理",
            "组件通信与插槽机制",
            "自定义指令与插件开发",
            "Nuxt.js 服务端渲染"
        ],
        experience: "开发过多个 Vue 项目，包括电商前台、管理后台等。使用 Pinia 替代 Vuex 提升开发体验，通过 Composition API 提升代码复用率。",
        proficiency: 85,
        tags: ["Vue 3", "Composition API", "Pinia", "Nuxt.js"]
    },
    {
        id: 3,
        title: "TypeScript",
        icon: "📘",
        category: "frontend",
        categoryText: "前端开发",
        description: "使用 TypeScript 进行类型安全的 JavaScript 开发，提升代码质量与可维护性。",
        keyPoints: [
            "掌握高级类型（泛型、条件类型、映射类型）",
            "理解类型推断与类型守卫机制",
            "熟练使用声明文件（.d.ts）",
            "掌握装饰器与元数据编程",
            "TypeScript 编译配置优化"
        ],
        experience: "在所有新项目中强制使用 TypeScript，通过严格的类型检查减少运行时错误 80%。建立了团队 TypeScript 规范与最佳实践文档。",
        proficiency: 88,
        tags: ["类型系统", "泛型", "装饰器", "类型推导"]
    },
    {
        id: 4,
        title: "CSS/Tailwind",
        icon: "🎨",
        category: "frontend",
        categoryText: "前端开发",
        description: "精通现代 CSS 技术与 Tailwind CSS 框架，实现响应式设计与炫酷视觉效果。",
        keyPoints: [
            "Flexbox 与 Grid 布局精通",
            "CSS 动画与过渡效果设计",
            "响应式设计与移动端适配",
            "Tailwind CSS 实用类优先开发",
            "CSS-in-JS 方案（Styled Components）"
        ],
        experience: "使用 Tailwind CSS 快速构建多个项目 UI，通过自定义主题配置实现品牌一致性。擅长实现复杂的 CSS 动画与视觉效果。",
        proficiency: 92,
        tags: ["Tailwind", "Responsive", "Animation", "Sass/Less"]
    },
    {
        id: 5,
        title: "Node.js 后端",
        icon: "🟢",
        category: "backend",
        categoryText: "后端技术",
        description: "使用 Node.js 构建高性能后端服务，掌握 Express、Koa 等框架与中间件开发。",
        keyPoints: [
            "Express/Koa 框架应用与中间件开发",
            "RESTful API 设计与最佳实践",
            "数据库连接与 ORM（Prisma, Sequelize）",
            "身份认证与授权（JWT, OAuth）",
            "文件上传、邮件发送等实用功能"
        ],
        experience: "独立开发过多个 Node.js 后端服务，包括用户系统、内容管理 API 等。使用 Prisma ORM 提升开发效率，通过中间件实现请求日志与错误处理。",
        proficiency: 82,
        tags: ["Node.js", "Express", "REST API", "Prisma"]
    },
    {
        id: 6,
        title: "Python/Flask",
        icon: "🐍",
        category: "backend",
        categoryText: "后端技术",
        description: "使用 Python 与 Flask 框架开发轻量级 Web 应用与 API 服务。",
        keyPoints: [
            "Flask 路由与蓝图组织",
            "Jinja2 模板引擎应用",
            "SQLAlchemy ORM 数据库操作",
            "Flask-RESTful API 开发",
            "数据爬取与数据处理"
        ],
        experience: "使用 Flask 开发过数据可视化平台后端、API 网关等服务。擅长使用 Python 进行数据处理与爬虫开发。",
        proficiency: 78,
        tags: ["Python", "Flask", "SQLAlchemy", "爬虫"]
    },
    {
        id: 7,
        title: "数据库设计",
        icon: "🗄️",
        category: "backend",
        categoryText: "后端技术",
        description: "掌握关系型与非关系型数据库设计与优化，包括 MySQL、MongoDB、Redis 等。",
        keyPoints: [
            "MySQL 索引优化与查询性能调优",
            "数据库表结构设计范式",
            "MongoDB 文档模型设计",
            "Redis 缓存策略与数据结构应用",
            "数据库主从复制与读写分离"
        ],
        experience: "为多个项目设计数据库架构，通过索引优化将查询性能提升 10 倍。使用 Redis 实现缓存层，大幅降低数据库压力。",
        proficiency: 85,
        tags: ["MySQL", "MongoDB", "Redis", "数据库优化"]
    },
    {
        id: 8,
        title: "Docker 容器化",
        icon: "🐳",
        category: "devops",
        categoryText: "部署运维",
        description: "使用 Docker 进行应用容器化部署，掌握 Docker Compose 多容器编排。",
        keyPoints: [
            "Dockerfile 编写与镜像构建优化",
            "Docker Compose 多服务编排",
            "容器网络配置与数据卷管理",
            "镜像仓库使用（Docker Hub, 私有仓库）",
            "容器监控与日志管理"
        ],
        experience: "将团队所有项目实现 Docker 容器化部署，统一开发、测试、生产环境一致性。通过多阶段构建减小镜像体积 70%。",
        proficiency: 80,
        tags: ["Docker", "Docker Compose", "容器化", "镜像优化"]
    },
    {
        id: 9,
        title: "CI/CD 流水线",
        icon: "🚀",
        category: "devops",
        categoryText: "部署运维",
        description: "建立自动化 CI/CD 流水线，实现代码提交到部署的全流程自动化。",
        keyPoints: [
            "GitHub Actions 工作流配置",
            "Jenkins Pipeline 脚本编写",
            "自动化测试与代码质量检查",
            "自动化部署与回滚机制",
            "环境变量与密钥管理"
        ],
        experience: "为团队搭建完整的 CI/CD 流程，实现代码提交后自动测试、构建、部署。将发布时间从 1 小时缩短至 5 分钟。",
        proficiency: 75,
        tags: ["GitHub Actions", "Jenkins", "自动化", "DevOps"]
    },
    {
        id: 10,
        title: "Git 版本控制",
        icon: "📦",
        category: "tools",
        categoryText: "开发工具",
        description: "精通 Git 版本控制，掌握分支管理策略与团队协作工作流。",
        keyPoints: [
            "Git Flow 分支管理策略",
            "Rebase 与 Merge 最佳实践",
            "Git Hooks 自动化脚本",
            "解决复杂合并冲突",
            "Submodule 与 Monorepo 管理"
        ],
        experience: "在团队中推广规范的 Git 工作流，通过 Git Hooks 实现代码提交前自动检查。擅长处理复杂的代码合并与冲突解决。",
        proficiency: 95,
        tags: ["Git", "GitHub", "GitLab", "分支策略"]
    },
    {
        id: 11,
        title: "Webpack/Vite 构建",
        icon: "⚡",
        category: "tools",
        categoryText: "开发工具",
        description: "掌握现代前端构建工具，优化构建速度与打包体积，提升开发体验。",
        keyPoints: [
            "Webpack 配置优化与插件开发",
            "Vite 快速开发服务器配置",
            "代码分割与懒加载策略",
            "Tree Shaking 与死代码消除",
            "静态资源优化与 CDN 部署"
        ],
        experience: "为多个项目配置构建工具，通过代码分割与懒加载将首屏资源减少 50%。迁移项目从 Webpack 到 Vite，开发服务器启动速度提升 10 倍。",
        proficiency: 83,
        tags: ["Webpack", "Vite", "构建优化", "模块打包"]
    },
    {
        id: 12,
        title: "性能优化",
        icon: "📊",
        category: "frontend",
        categoryText: "前端开发",
        description: "深入理解 Web 性能优化，掌握 Core Web Vitals 指标优化与性能监控。",
        keyPoints: [
            "Core Web Vitals 优化（LCP, FID, CLS）",
            "图片优化与懒加载策略",
            "代码分割与资源预加载",
            "虚拟列表与大数据渲染优化",
            "Performance API 性能监控"
        ],
        experience: "通过将 Lighthouse 性能分数从 45 提升至 95，优化多个项目的加载性能。建立性能监控体系，实时追踪核心指标。",
        proficiency: 87,
        tags: ["性能优化", "Lighthouse", "Web Vitals", "监控"]
    }
];

// ==================== 
// 粒子背景动画
// ==================== 
class ParticleBackground {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 80;
        
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    init() {
        this.resize();
        
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach((particle, index) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // 边界检测
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // 绘制粒子
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(0, 217, 255, ${particle.opacity})`;
            this.ctx.fill();
            
            // 绘制连线
            for (let j = index + 1; j < this.particles.length; j++) {
                const dx = particle.x - this.particles[j].x;
                const dy = particle.y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = `rgba(0, 217, 255, ${0.1 * (1 - distance / 150)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// ==================== 
// 数字动画
// ==================== 
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// ==================== 
// 技能卡片生成
// ==================== 
function createSkillCard(skill) {
    return `
        <div class="skill-card" data-category="${skill.category}" data-id="${skill.id}">
            <div class="skill-card-header">
                <div class="skill-icon">${skill.icon}</div>
                <div>
                    <h3 class="skill-title">${skill.title}</h3>
                    <span class="skill-category">${skill.categoryText}</span>
                </div>
            </div>
            <p class="skill-description">${skill.description}</p>
            <div class="skill-proficiency">
                <div class="proficiency-label">
                    <span>熟练度</span>
                    <span>${skill.proficiency}%</span>
                </div>
                <div class="proficiency-bar">
                    <div class="proficiency-fill" style="width: ${skill.proficiency}%"></div>
                </div>
            </div>
            <div class="skill-tags">
                ${skill.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
}

function renderSkills(filter = 'all') {
    const grid = document.getElementById('skills-grid');
    const filteredSkills = filter === 'all' 
        ? skillsData 
        : skillsData.filter(skill => skill.category === filter);
    
    grid.innerHTML = filteredSkills.map(skill => createSkillCard(skill)).join('');
    
    // 添加点击事件
    grid.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('click', () => {
            const skillId = parseInt(card.getAttribute('data-id'));
            openModal(skillId);
        });
    });
}

// ==================== 
// 筛选功能
// ==================== 
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // 更新按钮状态
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // 筛选技能
            const filter = btn.getAttribute('data-filter');
            renderSkills(filter);
        });
    });
}

// ==================== 
// 模态框功能
// ==================== 
function openModal(skillId) {
    const skill = skillsData.find(s => s.id === skillId);
    if (!skill) return;
    
    // 填充模态框内容
    document.getElementById('modal-icon').textContent = skill.icon;
    document.getElementById('modal-title').textContent = skill.title;
    document.getElementById('modal-category').textContent = skill.categoryText;
    document.getElementById('modal-description').textContent = skill.description;
    
    // 核心要点
    const keyPointsList = document.getElementById('modal-key-points');
    keyPointsList.innerHTML = skill.keyPoints.map(point => `<li>${point}</li>`).join('');
    
    // 实践经验
    document.getElementById('modal-experience').textContent = skill.experience;
    
    // 熟练度
    const proficiencyBar = document.getElementById('modal-proficiency');
    const proficiencyText = document.getElementById('modal-proficiency-text');
    setTimeout(() => {
        proficiencyBar.style.width = `${skill.proficiency}%`;
    }, 100);
    proficiencyText.textContent = `熟练度：${skill.proficiency}% - ${skill.proficiency >= 90 ? '专家' : skill.proficiency >= 80 ? '高级' : skill.proficiency >= 70 ? '中级' : '初级'}`;
    
    // 显示模态框
    const modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // 重置熟练度条
    setTimeout(() => {
        document.getElementById('modal-proficiency').style.width = '0';
    }, 300);
}

function initModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    
    modalClose.addEventListener('click', closeModal);
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // ESC 键关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// ==================== 
// 滚动动画
// ==================== 
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.skill-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

// ==================== 
// 初始化
// ==================== 
document.addEventListener('DOMContentLoaded', () => {
    // 粒子背景
    new ParticleBackground('particles-canvas');
    
    // 数字动画（延迟执行以实现滚动触发效果）
    setTimeout(animateCounters, 500);
    
    // 渲染技能卡片
    renderSkills();
    
    // 初始化筛选
    initFilters();
    
    // 初始化模态框
    initModal();
    
    // 滚动动画
    setTimeout(initScrollAnimations, 100);
});
