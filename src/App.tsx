import { useState } from 'react'
import './index.css'
import { 
  Code, 
  Users, 
  Briefcase, 
  Award, 
  ChevronRight, 
  CheckCircle, 
  Book, 
  Wrench, 
  Brain, 
  TrendingUp 
} from 'lucide-react';

export default function EngineeringCareerRoadmap() {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'timeline' | 'levels' | 'skills'>('timeline');

  const levels = [
    {
      level: 'Junior Developer',
      duration: '0-2 năm',
      color: 'bg-green-500',
      icon: Code,
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
      color: 'bg-blue-500',
      icon: Briefcase,
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
      color: 'bg-purple-600',
      icon: Award,
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
          'Làm “go-to person” cho 1-2 domain chính của hệ thống'
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
      color: 'bg-amber-600',
      icon: Brain,
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
          'Xử lý “company-level incidents” và đề xuất long-term fixes',
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
          'Học về org design, Conway’s Law, platform thinking',
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
      color: 'bg-red-600',
      icon: Users,
      categories: {
        technical: [
          'Không code hàng ngày nhưng vẫn hiểu sâu kiến trúc & trade-offs',
          'Define long-term technical vision & strategy',
          'Align product roadmap với technical roadmap',
          'Thiết kế org structure phù hợp kiến trúc (Conway’s Law)',
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
          'Books về leadership, management, org design (The Manager’s Path, An Elegant Puzzle)',
          'Học về business, tài chính, chiến lược công ty',
          'Executive coaching & peer groups (CTO/VP communities)',
          'Tham gia conference/talks ở tầm org & strategy',
          'Mentor leaders khác (EM, Director)',
          'Luôn giữ liên hệ với tech: review định kỳ architecture, postmortem, roadmap'
        ]
      }
    }
  ];

  const timeline = [
    { year: 'Năm 0-1', focus: 'Onboarding & Fundamentals', details: 'Học ngôn ngữ, Git, môi trường làm việc, quy trình team' },
    { year: 'Năm 1-2', focus: 'Build Confidence', details: 'Tự làm tasks nhỏ, fix bugs, đọc/hiểu codebase, bắt đầu làm side projects' },
    { year: 'Năm 2-4', focus: 'Delivery & Ownership', details: 'Master fundamentals, own features end-to-end, hỗ trợ juniors' },
    { year: 'Năm 4-7', focus: 'System & Domain Ownership', details: 'Senior: design hệ thống, dẫn dắt kỹ thuật, xử lý incidents lớn' },
    { year: 'Năm 7-10', focus: 'Org-Level Impact', details: 'Staff/Principal: cross-team architecture, standards, technical roadmap' },
    { year: 'Năm 10-15+', focus: 'Org & Strategy Leadership', details: 'Engineering Leader: org design, culture, chiến lược kỹ thuật & business' }
  ];

  const mustHaveSkills = [
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
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="w-screen max-w-full max-h-screen overflow-auto px-6 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-3">
            Lộ Trình Engineering Career (Junior → CTO)
          </h1>
          <p className="text-slate-300 text-lg">
            Designed by Tam Nguyen (Thomas) - tamnv0310@gmail.com
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap justify-center">
          {[
            { id: 'timeline', label: 'Timeline', icon: TrendingUp },
            { id: 'levels', label: 'Chi Tiết Theo Level', icon: Award },
            { id: 'skills', label: 'Kỹ Năng Cần Có', icon: Wrench }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Timeline View */}
        {activeTab === 'timeline' && (
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-purple-600 text-white font-bold px-4 py-2 rounded-lg min-w-[140px] text-center">
                    {item.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{item.focus}</h3>
                    <p className="text-slate-400">{item.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Levels Detail View */}
        {activeTab === 'levels' && (
          <div className="space-y-6">
            {levels.map((level, index) => {
              const Icon = level.icon;
              const isExpanded = expandedLevel === index;
              
              return (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
                >
                  {/* Header */}
                  <div
                    className={`${level.color} p-6 cursor-pointer hover:opacity-90 transition-all`}
                    onClick={() => setExpandedLevel(isExpanded ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Icon className="w-8 h-8 text-white" />
                        <div>
                          <h2 className="text-3xl font-bold text-white">{level.level}</h2>
                          <p className="text-white text-opacity-90">{level.duration}</p>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-8 h-8 text-white transition-transform ${
                          isExpanded ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  {isExpanded && (
                    <div className="p-6 space-y-6">
                      {/* Technical Skills */}
                      <div>
                        <h3 className="text-xl font-bold text-purple-400 mb-3 flex items-center gap-2">
                          <Code className="w-5 h-5" />
                          Technical Skills
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {level.categories.technical.map((skill, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-slate-300 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Project Experience */}
                      <div>
                        <h3 className="text-xl font-bold text-blue-400 mb-3 flex items-center gap-2">
                          <Briefcase className="w-5 h-5" />
                          Project / Org Impact
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {level.categories.projects.map((project, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-slate-300 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                              <span>{project}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Soft Skills */}
                      <div>
                        <h3 className="text-xl font-bold text-pink-400 mb-3 flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          Soft Skills & Leadership
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {level.categories.softSkills.map((skill, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-slate-300 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Learning Resources */}
                      <div>
                        <h3 className="text-xl font-bold text-orange-400 mb-3 flex items-center gap-2">
                          <Book className="w-5 h-5" />
                          Learning Path
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {level.categories.learning.map((resource, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 text-slate-300 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                              <span>{resource}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Skills View */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mustHaveSkills.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Tips */}
        <div className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6" />
            Noted
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white text-sm">
            <div>
              <span className="font-semibold">• Không có shortcut:</span> 10+ năm lên tới tầm Staff/Principal/Leader là bình thường
            </div>
            <div>
              <span className="font-semibold">• Soft skills = Technical skills:</span> Càng lên cao càng quan trọng
            </div>
            <div>
              <span className="font-semibold">• Side projects:</span> Phòng lab để học nhanh hơn công việc
            </div>
            <div>
              <span className="font-semibold">• Đọc code nguồn mở:</span> Học từ experts & best practices
            </div>
            <div>
              <span className="font-semibold">• Networking:</span> Meetups, conferences, communities
            </div>
            <div>
              <span className="font-semibold">• Teaching = Learning:</span> Mentor juniors, seniors, future leaders
            </div>
            <div>
              <span className="font-semibold">• Đừng compare:</span> Mỗi người 1 lộ trình & bối cảnh
            </div>
            <div>
              <span className="font-semibold">• Focus on depth:</span> Master 1-2 stacks trước, rồi mới mở rộng
            </div>
            <div>
              <span className="font-semibold">• Health matters:</span> Burnout không đáng giá, leader cần đi đường dài.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
