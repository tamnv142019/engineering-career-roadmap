const translations = {
  en: {
    levels: [
      {
        level: 'Junior Developer',
        duration: '0-2 years',
        categories: {
          technical: [
            'Language: JavaScript/Python/Java/.NET (choose 1-2)',
            'Basic HTML/CSS, responsive design',
            'Git: clone, commit, push, pull, branch, merge',
            'Proficient IDE/Editor (VS Code, IntelliJ, Rider)',
            'Basic algorithms: sort, search, loops',
            'Data structures: arrays, objects, lists',
            'Debug with breakpoints, console.log, basic logs',
            'Read documentation, Stack Overflow, official guides',
            'Basic SQL: SELECT, INSERT, UPDATE, DELETE',
            'Testing: write simple unit tests'
          ],
          projects: [
            'Fix bugs from small tickets',
            'Implement UI components per design',
            'Simple CRUD operations',
            'Refactor small code sections under guidance',
            'Write basic documentation',
            'Participate in code reviews to learn',
            'Work on 1-2 small side projects for practice'
          ],
          softSkills: [
            'Ask questions the right way, to the right person',
            'Daily standup: report progress clearly',
            'Basic time management (task list, prioritization)',
            'Learn how to receive feedback without defensiveness',
            'Communicate with team via Slack/Email clearly',
            'Accept that you don\'t know everything and proactively learn'
          ],
          learning: [
            'Online courses: Udemy, Coursera, freeCodeCamp',
            'Read blogs: Medium, Dev.to',
            'Follow tutorials → then rebuild without looking',
            'LeetCode Easy problems',
            'Join coding communities and developer groups',
            'Read your team\'s codebase to understand style & conventions'
          ]
        }
      },
      {
        level: 'Mid-Level Developer',
        duration: '2-4 years',
        categories: {
          technical: [
            'Proficient in 2-3 main languages/frameworks',
            'Frontend: React/Vue/Angular + state management',
            'Backend: Node.js/Django/Spring Boot/.NET + RESTful APIs',
            'Database: PostgreSQL/MySQL, joins, indexes, transactions',
            'Authentication: JWT, OAuth, session management',
            'Design patterns: Singleton, Factory, Observer, Strategy',
            'OOP principles: SOLID, DRY, KISS',
            'API design: versioning, pagination, error handling',
            'Caching: Redis, memcached (basics)',
            'Message queues: RabbitMQ, Kafka basics',
            'Docker basics: build, run containers',
            'CI/CD: GitHub Actions, Jenkins pipelines',
            'Monitoring: logs, basic metrics, basic alerts',
            'Security: XSS, CSRF, SQL injection prevention',
            'Performance: profiling, basic optimization'
          ],
          projects: [
            'Complete features from start to finish',
            'Estimate tasks with reasonable accuracy (story points)',
            'Design database schema for small modules',
            'Integrate third-party APIs',
            'Write comprehensive tests (unit + integration)',
            'Deploy to staging/production with minimal support',
            'Handle production bugs independently',
            'Refactor legacy code for maintainability',
            'Participate in design discussions for new features'
          ],
          softSkills: [
            'Code review juniors constructively',
            'Effective pair programming',
            'Tech discussions: contribute ideas and trade-offs',
            'Present demos to team/PM',
            'Collaborate with designers, PMs, QA',
            'Know how to push back unreasonable requests with clear reasoning',
            'Time management: balance multiple tasks & context switching',
            'Ownership: responsible until feature is stable in production'
          ],
          learning: [
            'Basic system design (caching, database, queues)',
            'Read tech books: Clean Code, Design Patterns',
            'LeetCode Medium problems',
            'Contribute to open source (small PRs)',
            'Tech conferences/meetups',
            'Teaching juniors = learning more deeply',
            'Write internal docs, document learnings after each incident'
          ]
        }
      },
      {
        level: 'Senior Developer',
        duration: '4-7+ years',
        categories: {
          technical: [
            'Multi-paradigm: OOP, Functional, Event-driven',
            'System design: load balancing, caching strategies, rate limiting',
            'Microservices: service mesh, API gateway, contracts',
            'Cloud: AWS/GCP/Azure services for production applications',
            'Kubernetes: deployments, services, scaling, rollout',
            'Database: sharding, replication, NoSQL (MongoDB, Cassandra)',
            'Event streaming: Kafka, event sourcing, outbox pattern',
            'Monitoring: Prometheus, Grafana, ELK/EFK stack, APM',
            'Security: threat modeling, secrets management, basic compliance',
            'Performance: distributed tracing, profiling, bottleneck analysis',
            'Architecture patterns: CQRS, Saga, Hexagonal, Clean Architecture',
            'Infrastructure as Code: Terraform, CloudFormation, Bicep',
            'High availability: failover, disaster recovery, RPO/RTO',
            'Data pipelines: ETL, basic data warehousing',
            'GraphQL, gRPC, WebSockets, streaming APIs',
            'Testing strategies: E2E, load testing, basics of chaos engineering'
          ],
          projects: [
            'Lead technical design for large features/modules',
            'Architecture decisions: choose tech stack & patterns',
            'Migrate legacy systems to new architecture',
            'Build or refine CI/CD pipelines from scratch',
            'Optimize performance bottlenecks for critical services',
            'Design scalable APIs for hundreds of thousands/millions of users',
            'Incident response: root cause analysis, postmortems',
            'Technical debt: identify, prioritize and resolve',
            'Cross-team integration projects, align multiple services',
            'POCs for new technologies, evaluate trade-offs',
            'Become "go-to person" for 1-2 main system domains'
          ],
          softSkills: [
            'Mentor 2-3 mid/junior developers regularly',
            'Lead technical meetings, drive conclusions',
            'Code review: balance quality vs delivery speed',
            'Translate business requirements → feasible technical solutions',
            'Estimate project timelines (weeks → months)',
            'Handle ambiguity, make decisions with incomplete info',
            'Conflict resolution in team (technical & people issues)',
            'Stakeholder management: work with PM, QA, Ops, Business',
            'Write technical RFCs/design docs clearly with trade-offs',
            'Interview candidates, assess technical & culture fit',
            'On-call rotation: production support, runbooks',
            'Know how to say "no" constructively & propose alternatives'
          ],
          learning: [
            'System Design Interview / real-life system design',
            'Advanced books: Designing Data-Intensive Applications, Staff Engineer',
            'LeetCode Hard (if needed for interview, not required)',
            'AWS/GCP/Azure certifications (depending on direction)',
            'Speaking at internal/external tech talks',
            'Write technical blogs sharing experience',
            'Participate in big architecture & org decisions',
            'Learn basic finance/product to understand business trade-offs'
          ]
        }
      },
      {
        level: 'Staff / Principal Engineer',
        duration: '7-12+ years',
        categories: {
          technical: [
            'Lead architecture for multiple systems/domains simultaneously',
            'Design platforms & shared services used by many teams',
            'Define engineering standards: logging, monitoring, testing, security',
            'Cross-region, multi-tenant, multi-cloud considerations',
            'Performance & reliability at scale (SLI/SLO, error budget)',
            'Design technical roadmap 1-3 years for domain',
            'Align architecture with product strategy & business',
            'Advise on build vs buy, infrastructure costs, TCO',
            'Review & approve designs from Senior/other teams',
            'Work closely with SRE/Infra/Platform team'
          ],
          projects: [
            'Drive large refactor/migration programs (monolith → microservices)',
            'Handle "company-level incidents" and propose long-term fixes',
            'Design and deploy shared platforms (logging, event bus, auth service)',
            'Lead cross-team initiatives (features spanning multiple domains)',
            'Be tech sponsor for strategic projects',
            'Define & drive technical OKRs',
            'Serve as chief architect for one product area'
          ],
          softSkills: [
            'Influence without direct authority',
            'Facilitate discussions between teams with different goals',
            'Coach Senior Engineers and above',
            'Negotiate trade-offs between Product, Business, Ops, Security',
            'Technical storytelling: explain architecture to non-tech stakeholders',
            'Write long-form design docs and proposals adopted by org',
            'Build consensus, handle strategic disagreements',
            'Manage up: align with Director/VP/CTO on technical direction'
          ],
          learning: [
            'Books on Staff/Principal role, architecture, scaling orgs',
            'Learn about org design, Conway\'s Law, platform thinking',
            'Deep dive into cost optimization & FinOps',
            'Community: StaffEng, tech leadership groups',
            'Mentor Seniors wanting to reach Staff',
            'Contribute to internal frameworks, standards across company'
          ]
        }
      },
      {
        level: 'Engineering Leader (EM / Director / VP Eng / CTO)',
        duration: '10-15+ years',
        categories: {
          technical: [
            'Don\'t code daily but understand architecture & trade-offs deeply',
            'Define long-term technical vision & strategy',
            'Align product roadmap with technical roadmap',
            'Design org structure aligned with architecture (Conway\'s Law)',
            'Review & challenge big decisions on platform & architecture',
            'Define quality bar: security, reliability, compliance, privacy',
            'Understand company-level metrics: availability, velocity, quality, cost'
          ],
          projects: [
            'Build and scale engineering org (hiring, team structure)',
            'Define and track engineering KPIs/OKRs',
            'Drive cultural changes (testing culture, ownership, on-call, remote)',
            'Work with other C-level leaders: CPO, CFO, CEO on strategy',
            'Make build/buy/partner decisions for large platforms',
            'Own engineering budget & infrastructure costs',
            'Manage project portfolio, not just individual projects',
            'Represent engineering to board/investors/large customers'
          ],
          softSkills: [
            'People management: grow EMs, Staff, Senior engineers',
            'Org communication: all-hands, strategy docs, vision talks',
            'Hiring strategy & bar setting for entire org',
            'Conflict management at org level, not just team',
            'Stakeholder management: CEO, Product, Sales, Customer Success',
            'Create psychological safety & high-performance culture',
            'Succession planning: build next generation of leaders',
            'Make difficult decisions (layoffs, sunset products, strategy changes)'
          ],
          learning: [
            'Books on leadership, management, org design (The Manager\'s Path, An Elegant Puzzle)',
            'Learn about business, finance, company strategy',
            'Executive coaching & peer groups (CTO/VP communities)',
            'Attend conferences/talks on org & strategy level',
            'Mentor other leaders (EM, Director)',
            'Stay connected with tech: regularly review architecture, postmortems, roadmaps'
          ]
        }
      }
    ],
    timeline: [
      { year: 'Year 0-1', focus: 'Onboarding & Fundamentals', details: 'Learn language, Git, work environment, team processes' },
      { year: 'Year 1-2', focus: 'Build Confidence', details: 'Complete small tasks independently, fix bugs, read/understand codebase, start side projects' },
      { year: 'Year 2-4', focus: 'Delivery & Ownership', details: 'Master fundamentals, own features end-to-end, support juniors' },
      { year: 'Year 4-7', focus: 'System & Domain Ownership', details: 'Senior: design systems, lead technical decisions, handle large incidents' },
      { year: 'Year 7-10', focus: 'Org-Level Impact', details: 'Staff/Principal: cross-team architecture, standards, technical roadmap' },
      { year: 'Year 10-15+', focus: 'Org & Strategy Leadership', details: 'Engineering Leader: org design, culture, technical & business strategy' }
    ],
    skills: [
      {
        category: 'Frontend Path',
        skills: [
          'HTML/CSS/JavaScript mastery',
          'React/Vue/Angular + ecosystem',
          'State management (Redux, Zustand, MobX, Pinia)',
          'TypeScript for large codebases',
          'Webpack/Vite build tools & optimization',
          'Testing: Jest, React Testing Library, Cypress',
          'Performance optimization (bundle size, TTI, hydration)',
          'Accessibility (a11y) & basic UX',
          'SEO basics for SPA/SSR',
          'Mobile responsive & design systems'
        ]
      },
      {
        category: 'Backend Path',
        skills: [
          'Node.js/Python/Java/.NET (choose 1-2 as primary)',
          'RESTful API design + GraphQL/gRPC when needed',
          'Database (SQL + NoSQL) & query optimization',
          'Authentication & Authorization, RBAC/ABAC',
          'Microservices architecture & service contracts',
          'Message queues & event-driven systems',
          'Caching strategies (app, db, CDN)',
          'API security, rate limiting, throttling',
          'Docker & Kubernetes',
          'Cloud platforms (AWS/GCP/Azure) production experience'
        ]
      },
      {
        category: 'DevOps & Platform Skills',
        skills: [
          'Linux command line, basic networking',
          'CI/CD pipelines (Jenkins/GitHub Actions/GitLab CI)',
          'Docker containerization & image best practices',
          'Kubernetes orchestration & deployment strategies',
          'AWS/GCP/Azure core services',
          'Infrastructure as Code (Terraform, Bicep, CloudFormation)',
          'Monitoring & logging (Prometheus, Grafana, ELK/EFK, APM)',
          'Nginx/Apache/Ingress controllers',
          'Scripting (Bash, Python, PowerShell)',
          'Security best practices (secrets, TLS, least privilege)'
        ]
      },
      {
        category: 'Leadership & Strategy',
        skills: [
          'Communication: explain technical concepts at multiple levels',
          'Mentoring & coaching (Junior → Senior → Staff)',
          'Code review etiquette & quality standards',
          'Time management & priority management',
          'Problem solving frameworks (5 Whys, RCA, trade-offs)',
          'Teamwork & collaboration across teams',
          'Ownership & accountability to system/org level',
          'Continuous learning mindset & growth mindset',
          'Giving/receiving feedback, difficult conversations',
          'Leadership without authority & org influence'
        ]
      }
    ],
    labels: {
      title: 'Engineering Career Roadmap (Junior → CTO)',
      subtitle: 'Designed by Tam Nguyen (Thomas) - tamnv0310@gmail.com',
      timeline: 'Timeline',
      levels: 'Details by Level',
      skills: 'Required Skills',
      technicalSkills: 'Technical Skills',
      projectExperience: 'Project / Org Impact',
      softSkills: 'Soft Skills & Leadership',
      learningPath: 'Learning Path',
      importantNotes: 'Important Notes',
      notes: [
        'No shortcuts: 10+ years to reach Staff/Principal/Leader level is normal',
        'Soft skills = Technical skills: more important as you progress',
        'Side projects: labs to learn faster than at work',
        'Read open source: learn from experts & best practices',
        'Networking: meetups, conferences, communities',
        'Teaching = Learning: mentor juniors, seniors, future leaders',
        'Don\'t compare: everyone has their own timeline & context',
        'Focus on depth: master 1-2 stacks first, then expand',
        'Health matters: burnout is not worth it, leaders need to go the distance'
      ]
    }
  },
  vi: {
    levels: [
      {
        level: 'Junior Developer',
        duration: '0-2 năm',
        categories: {
          technical: [
            'Ngôn ngữ: JavaScript/Python/Java/.NET (chọn 1-2)',
            'HTML/CSS cơ bản, responsive design',
            'Git: clone, commit, push, pull, branch, merge',
            'IDE/Editor thành thạo (VS Code, IntelliJ, Rider)',
            'Basic algorithms: sort, search, loops',
            'Data structures: arrays, objects, lists',
            'Debug với breakpoints, console.log, logs cơ bản',
            'Read documentation, Stack Overflow, official guides',
            'Basic SQL: SELECT, INSERT, UPDATE, DELETE',
            'Testing: viết unit tests đơn giản'
          ],
          projects: [
            'Fix bugs theo ticket nhỏ',
            'Implement UI components theo design',
            'CRUD operations đơn giản',
            'Refactor code nhỏ theo hướng dẫn',
            'Write basic documentation',
            'Tham gia code review để học',
            'Làm 1-2 side projects nhỏ để luyện'
          ],
          softSkills: [
            'Hỏi câu hỏi đúng cách, đúng người',
            'Daily standup: báo cáo tiến độ rõ ràng',
            'Quản lý thời gian cơ bản (task list, ưu tiên)',
            'Học cách nhận feedback không phòng thủ',
            'Giao tiếp với team bằng Slack/Email rõ ý',
            'Chấp nhận mình không biết và chủ động học hỏi'
          ],
          learning: [
            'Online courses: Udemy, Coursera, freeCodeCamp',
            'Đọc blog: Medium, Dev.to',
            'Làm theo tutorials → sau đó tự làm lại không nhìn',
            'LeetCode Easy problems',
            'Tham gia coding communities, group dev',
            'Đọc codebase của team để hiểu style & convention'
          ]
        }
      },
      {
        level: 'Mid-Level Developer',
        duration: '2-4 năm',
        categories: {
          technical: [
            'Thành thạo 2-3 languages/frameworks chính',
            'Frontend: React/Vue/Angular + state management',
            'Backend: Node.js/Django/Spring Boot/.NET + RESTful APIs',
            'Database: PostgreSQL/MySQL, joins, indexes, transactions',
            'Authentication: JWT, OAuth, session management',
            'Design patterns: Singleton, Factory, Observer, Strategy',
            'OOP principles: SOLID, DRY, KISS',
            'API design: versioning, pagination, error handling',
            'Caching: Redis, memcached (basic)',
            'Message queues: RabbitMQ, Kafka basics',
            'Docker basics: build, run containers',
            'CI/CD: GitHub Actions, Jenkins pipelines',
            'Monitoring: logs, basic metrics, alerts cơ bản',
            'Security: XSS, CSRF, SQL injection prevention',
            'Performance: profiling, optimization cơ bản'
          ],
          projects: [
            'Làm features hoàn chỉnh từ đầu đến cuối',
            'Estimate tasks tương đối chính xác (story points)',
            'Tự thiết kế database schema cho module nhỏ',
            'Integrate third-party APIs',
            'Write comprehensive tests (unit + integration)',
            'Deploy to staging/production với support nhẹ',
            'Handle production bugs độc lập',
            'Refactor legacy code để dễ maintain',
            'Tham gia design discussions cho feature mới'
          ],
          softSkills: [
            'Code review cho juniors một cách xây dựng',
            'Pair programming hiệu quả',
            'Tech discussions: đóng góp ý kiến, đưa trade-offs',
            'Present demos cho team/PM',
            'Collaborate với designers, PMs, QA',
            'Biết push back yêu cầu không hợp lý với lý do rõ ràng',
            'Time management: balance nhiều tasks & context switching',
            'Ownership: chịu trách nhiệm tới khi feature ổn production'
          ],
          learning: [
            'System design cơ bản (caching, database, queues)',
            'Read tech books: Clean Code, Design Patterns',
            'LeetCode Medium problems',
            'Contribute to open source (small PRs)',
            'Tech conferences/meetups',
            'Teaching juniors = học sâu hơn',
            'Viết internal docs, ghi lại learnings sau mỗi incident'
          ]
        }
      },
      {
        level: 'Senior Developer',
        duration: '4-7+ năm',
        categories: {
          technical: [
            'Multi-paradigm: OOP, Functional, Event-driven',
            'System design: load balancing, caching strategies, rate limiting',
            'Microservices: service mesh, API gateway, contracts',
            'Cloud: AWS/GCP/Azure services cho ứng dụng production',
            'Kubernetes: deployments, services, scaling, rollout',
            'Database: sharding, replication, NoSQL (MongoDB, Cassandra)',
            'Event streaming: Kafka, event sourcing, outbox pattern',
            'Monitoring: Prometheus, Grafana, ELK/EFK stack, APM',
            'Security: threat modeling, secrets management, compliance cơ bản',
            'Performance: distributed tracing, profiling, bottleneck analysis',
            'Architecture patterns: CQRS, Saga, Hexagonal, Clean Architecture',
            'Infrastructure as Code: Terraform, CloudFormation, Bicep',
            'High availability: failover, disaster recovery, RPO/RTO',
            'Data pipelines: ETL, data warehousing cơ bản',
            'GraphQL, gRPC, WebSockets, streaming APIs',
            'Testing strategies: E2E, load testing, chaos engineering basics'
          ],
          projects: [
            'Lead technical design cho features / modules lớn',
            'Architecture decisions: chọn tech stack & patterns',
            'Migrate legacy systems sang kiến trúc mới',
            'Build hoặc hoàn thiện CI/CD pipelines từ scratch',
            'Optimize performance bottlenecks cho services quan trọng',
            'Design scalable APIs cho hàng trăm nghìn / triệu users',
            'Incident response: root cause analysis, postmortem',
            'Technical debt: nhận diện, prioritize và resolve',
            'Cross-team integration projects, align nhiều service',
            'POCs cho technologies mới, đánh giá trade-offs',
            'Làm "go-to person" cho 1-2 domain chính của hệ thống'
          ],
          softSkills: [
            'Mentor 2-3 mid/junior developers thường xuyên',
            'Lead technical meetings, drive kết luận',
            'Code review: balance quality vs delivery speed',
            'Translate business requirements → technical solutions khả thi',
            'Estimate project timelines (tuần → vài tháng)',
            'Handle ambiguity, make decisions với incomplete info',
            'Conflict resolution trong team (kỹ thuật & con người)',
            'Stakeholder management: làm việc với PM, QA, Ops, Business',
            'Write technical RFCs/design docs rõ, có trade-offs',
            'Interview candidates, đánh giá technical & culture fit',
            'On-call rotation: production support, runbooks',
            'Biết nói "no" constructively & đề xuất alternative'
          ],
          learning: [
            'System Design Interview / real-life system design',
            'Advanced books: Designing Data-Intensive Applications, Staff Engineer',
            'LeetCode Hard (nếu cần cho interview, không bắt buộc)',
            'AWS/GCP/Azure certifications (tùy hướng đi)',
            'Speaking tại internal/external tech talks',
            'Write technical blogs chia sẻ kinh nghiệm',
            'Tham gia decision lớn về architecture & org',
            'Học basic finance/product để hiểu trade-offs business'
          ]
        }
      },
      {
        level: 'Staff / Principal Engineer',
        duration: '7-12+ năm',
        categories: {
          technical: [
            'Lead architecture cho nhiều hệ thống / domains cùng lúc',
            'Thiết kế platform & shared services dùng bởi nhiều team',
            'Define engineering standards: logging, monitoring, testing, security',
            'Cross-region, multi-tenant, multi-cloud considerations',
            'Performance & reliability ở scale lớn (SLI/SLO, error budget)',
            'Design technical roadmap 1-3 năm cho domain',
            'Gắn kiến trúc với chiến lược sản phẩm & business',
            'Tư vấn build vs buy, chi phí hạ tầng, TCO',
            'Review & approve design của Senior/teams khác',
            'Làm việc chặt với SRE/Infra/Platform team'
          ],
          projects: [
            'Drive chương trình refactor/migration lớn (monolith → microservices)',
            'Xử lý "company-level incidents" và đề xuất long-term fixes',
            'Thiết kế và triển khai platform shared (logging, event bus, auth service)',
            'Lead cross-team initiatives (feature cắt ngang nhiều domain)',
            'Làm tech sponsor cho các dự án chiến lược',
            'Define & drive technical OKRs',
            'Làm kiến trúc sư chính cho 1 mảng sản phẩm'
          ],
          softSkills: [
            'Ảnh hưởng mà không cần quyền lực trực tiếp (influence without authority)',
            'Facilitate discussions giữa nhiều team có mục tiêu khác nhau',
            'Coaching Senior Engineers trở lên',
            'Negotiate trade-offs giữa Product, Business, Ops, Security',
            'Storytelling kỹ thuật: giải thích kiến trúc cho non-tech stakeholders',
            'Write long-form design docs, proposals được org adopt',
            'Build consensus, xử lý bất đồng chiến lược',
            'Manage up: align với Director/VP/CTO về technical direction'
          ],
          learning: [
            'Books về Staff/Principal role, architecture, scaling orgs',
            'Học về org design, Conway\'s Law, platform thinking',
            'Học sâu về cost optimization & FinOps',
            'Community: StaffEng, tech leadership groups',
            'Mentor các Senior muốn lên Staff',
            'Đóng góp vào internal frameworks, standards toàn công ty'
          ]
        }
      },
      {
        level: 'Engineering Leader (EM / Director / VP Eng / CTO)',
        duration: '10-15+ năm',
        categories: {
          technical: [
            'Không code hàng ngày nhưng vẫn hiểu sâu kiến trúc & trade-offs',
            'Define long-term technical vision & strategy',
            'Align product roadmap với technical roadmap',
            'Thiết kế org structure phù hợp kiến trúc (Conway\'s Law)',
            'Review & challenge các quyết định lớn về platform & architecture',
            'Define quality bar: security, reliability, compliance, privacy',
            'Hiểu metrics cấp công ty: availability, velocity, quality, cost'
          ],
          projects: [
            'Build và scale engineering org (hiring, cấu trúc team)',
            'Define và theo dõi engineering KPIs/OKRs',
            'Drive cultural changes (testing culture, ownership, on-call, remote)',
            'Làm việc với C-level khác: CPO, CFO, CEO về chiến lược',
            'Đưa ra quyết định build/buy/partner cho platform lớn',
            'Ownership ngân sách engineering & chi phí hạ tầng',
            'Manage portfolio projects chứ không chỉ từng project',
            'Đại diện engineering trước board/investors/khách hàng lớn'
          ],
          softSkills: [
            'People management: grow EMs, Staff, Senior',
            'Org communication: all-hands, strategy docs, vision talks',
            'Hiring strategy & bar setting cho toàn org',
            'Conflict management ở cấp độ org, không chỉ team',
            'Stakeholder management: CEO, Product, Sales, Customer Success',
            'Create psychological safety & high-performance culture',
            'Succession planning: xây thế hệ lãnh đạo tiếp theo',
            'Đưa ra quyết định khó (layoff, sunset sản phẩm, đổi chiến lược)'
          ],
          learning: [
            'Books về leadership, management, org design (The Manager\'s Path, An Elegant Puzzle)',
            'Học về business, tài chính, chiến lược công ty',
            'Executive coaching & peer groups (CTO/VP communities)',
            'Tham gia conference/talks ở tầm org & strategy',
            'Mentor leaders khác (EM, Director)',
            'Luôn giữ liên hệ với tech: review định kỳ architecture, postmortem, roadmap'
          ]
        }
      }
    ],
    timeline: [
      { year: 'Năm 0-1', focus: 'Onboarding & Fundamentals', details: 'Học ngôn ngữ, Git, môi trường làm việc, quy trình team' },
      { year: 'Năm 1-2', focus: 'Build Confidence', details: 'Tự làm tasks nhỏ, fix bugs, đọc/hiểu codebase, bắt đầu làm side projects' },
      { year: 'Năm 2-4', focus: 'Delivery & Ownership', details: 'Master fundamentals, own features end-to-end, hỗ trợ juniors' },
      { year: 'Năm 4-7', focus: 'System & Domain Ownership', details: 'Senior: design hệ thống, dẫn dắt kỹ thuật, xử lý incidents lớn' },
      { year: 'Năm 7-10', focus: 'Org-Level Impact', details: 'Staff/Principal: cross-team architecture, standards, technical roadmap' },
      { year: 'Năm 10-15+', focus: 'Org & Strategy Leadership', details: 'Engineering Leader: org design, culture, chiến lược kỹ thuật & business' }
    ],
    skills: [
      {
        category: 'Frontend Path',
        skills: [
          'HTML/CSS/JavaScript mastery',
          'React/Vue/Angular + ecosystem',
          'State management (Redux, Zustand, MobX, Pinia)',
          'TypeScript cho codebase lớn',
          'Webpack/Vite build tools & optimization',
          'Testing: Jest, React Testing Library, Cypress',
          'Performance optimization (bundle size, TTI, hydration)',
          'Accessibility (a11y) & UX cơ bản',
          'SEO basics cho SPA/SSR',
          'Mobile responsive & design systems'
        ]
      },
      {
        category: 'Backend Path',
        skills: [
          'Node.js/Python/Java/.NET (chọn 1-2 làm chính)',
          'RESTful API design + GraphQL/gRPC khi cần',
          'Database (SQL + NoSQL) & query optimization',
          'Authentication & Authorization, RBAC/ABAC',
          'Microservices architecture & service contracts',
          'Message queues & event-driven systems',
          'Caching strategies (app, db, CDN)',
          'API security, rate limiting, throttling',
          'Docker & Kubernetes',
          'Cloud platforms (AWS/GCP/Azure) production experience'
        ]
      },
      {
        category: 'DevOps & Platform Skills',
        skills: [
          'Linux command line, networking basics',
          'CI/CD pipelines (Jenkins/GitHub Actions/GitLab CI)',
          'Docker containerization & images best practices',
          'Kubernetes orchestration & deployment strategies',
          'AWS/GCP/Azure core services',
          'Infrastructure as Code (Terraform, Bicep, CloudFormation)',
          'Monitoring & logging (Prometheus, Grafana, ELK/EFK, APM)',
          'Nginx/Apache/Ingress controllers',
          'Scripting (Bash, Python, PowerShell)',
          'Security best practices (secrets, TLS, least privilege)'
        ]
      },
      {
        category: 'Leadership & Strategy',
        skills: [
          'Communication: explain technical concepts ở nhiều level',
          'Mentoring & coaching (Junior → Senior → Staff)',
          'Code review etiquette & quality bar',
          'Time management & priority management',
          'Problem solving frameworks (5 Whys, RCA, trade-offs)',
          'Teamwork & collaboration across teams',
          'Ownership & accountability đến level hệ thống/org',
          'Continuous learning mindset & growth mindset',
          'Giving/receiving feedback difficult conversations',
          'Leadership without authority & org influence'
        ]
      }
    ],
    labels: {
      title: 'Lộ Trình Engineering Career (Junior → CTO)',
      subtitle: 'Designed by Tam Nguyen (Thomas) - tamnv0310@gmail.com',
      timeline: 'Timeline',
      levels: 'Chi Tiết Theo Level',
      skills: 'Kỹ Năng Cần Có',
      technicalSkills: 'Technical Skills',
      projectExperience: 'Project / Org Impact',
      softSkills: 'Soft Skills & Leadership',
      learningPath: 'Learning Path',
      importantNotes: 'Noted',
      notes: [
        'Không có shortcut: 10+ năm lên tới tầm Staff/Principal/Leader là bình thường',
        'Soft skills = Technical skills: Càng lên cao càng quan trọng',
        'Side projects: Phòng lab để học nhanh hơn công việc',
        'Đọc code nguồn mở: Học từ experts & best practices',
        'Networking: Meetups, conferences, communities',
        'Teaching = Learning: Mentor juniors, seniors, future leaders',
        'Đừng compare: Mỗi người 1 lộ trình & bối cảnh',
        'Focus on depth: Master 1-2 stacks trước, rồi mới mở rộng',
        'Health matters: Burnout không đáng giá, leader cần đi đường dài'
      ]
    }
  }
};

export default translations;
