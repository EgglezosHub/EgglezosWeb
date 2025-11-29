export const siteConfig = {
  name: "Dimitrios Egglezos",
  title: "Junior Software Engineer",
  description: "Portfolio website of Dimitris Egglezos",
  accentColor: "#1d4ed8",
  social: {
    email: "dimitrissegglezos@gmail.com",
    linkedin: "https://www.linkedin.com/in/dimitrios-egglezos/",
    twitter: "-",
    github: "https://github.com/EgglezosHub",
  },
  aboutMe:
    "I am Dimitris Egglezos, a software engineer pursuing a B.S. & Integrated M.S. in Informatics and Computer Engineering at the University of West Attica (expected October 2027). My experience covers backend systems, distributed computing, full-stack development, and applied AI, with projects ranging from Java RMI and MPI applications to scalable web platforms, messaging systems, and AI-based solvers. I focus on building efficient, reliable solutions while continuously advancing my expertise in parallel computing, artificial intelligence, and modern software technologies.",
  skills: ["AI / ML", "Full-Stack Development", "Java", "Python", "C++", "C"],
  projects: [
      {
      slug: "myelectra-smart-energy",
      name: "MyElectra — Smart Energy Family App (Hackathon Winner)",
      description:
        "Real-time energy-trading dashboard where households monitor usage/production, compute surplus, and buy/sell electricity via a simple marketplace.",
      dateRange: "Nov 2025",
      skills: ["FastAPI", "JavaScript", "SQL", "System Design", "Data Visualization"],
      tech: ["Python", "FastAPI", "SQLAlchemy", "SQLite/PostgreSQL", "Chart.js", "Docker"],
      highlights: [
        "🏆 Winner — DIEM 2025 (Smart Energy track).",
        "Role: Backend & System Design — led API design, data model, and time-series logic.",
        "12-hour rolling charts for usage, production, and surplus with efficient window queries.",
        "Marketplace for offers (buy/sell kWh), account balances, and per-user history.",
        "Clean separation of concerns: FastAPI backend (REST/JSON) + lightweight JS/Chart.js frontend."
      ],
      performance: [
        "Time-windowed queries (12h) keep charts responsive without reloading entire histories.",
        "Surplus is derived per user from production–usage streams; rolling storage avoids unbounded growth.",
        "Wallet/connect flows were simulated for demo clarity; business logic remains backend-driven for reliability.",
        "Dockerized local dev; simple `.sh` runner to start backend (Uvicorn) and static frontend server."
      ],
      challenges: [
        "Keeping per-user streams independent while aggregating cleanly for surplus and marketplace views.",
        "Ensuring charts stay fixed to a 12h horizon when switching users (no drifting timestamps).",
        "Avoiding write-contention on balance/offer updates; structured endpoints with idempotent updates."
      ],
      images: [
        "/images/MyElectra1.png",
        "/images/MyElectra2.png",
        "/images/MyElectra3.png"
      ],
      repo: "https://github.com/skevisvagelis769/HACKATHON-DIEM-2025",
      link: "https://github.com/skevisvagelis769/HACKATHON-DIEM-2025" // or a live demo URL if you deploy it
    },
    {
      slug: "wine-not",
      name: "Wine Not (Full-Stack E-Commerce App)",
      description:
        "Led a team in developing a full-stack e-commerce platform with accounts, catalog, wishlist, cart, and checkout. Directed architecture, backend optimizations, and documentation, achieving ~45 requests/sec throughput with <400 ms latency.",
      dateRange: "July 2025 – August 2025",
      skills: ["Java", "Spring", "SQL", "REST APIs", "Full-Stack"],
      tech: ["Java", "Spring Boot", "PostgreSQL", "REST", "Docker", "Locust"],
      highlights: [
        "Directed system architecture and coordinated team contributions.",
        "Documented APIs and schema for smooth team collaboration.",
      ],
      performance: [
      "As part of the development of **WineEshop**, a full-stack e-commerce backend built with **Flask** and **SQLite**, I served as the **team lead**, coordinating the project direction while also taking ownership of the core implementation. I designed and integrated the system’s architecture, contributing over **4,000 lines of code** to deliver the major features, while ensuring the project stayed on track and met its goals. This role strengthened my ability to combine **technical execution with project leadership**, ensuring both functionality and measurable performance.",
      "The system supports essential shopping features, including **user registration and authentication**, **catalog browsing**, **wishlist management**, **cart operations**, and **order placement**. My goal was not only to implement these features but also to understand how they perform under real-world concurrent usage.",
      "Testing was performed using **Locust**, simulating user flows such as browsing wines, adding/removing items from the cart and wishlist, and completing checkouts. Three scenarios were evaluated: a light smoke test (~10 users), a medium test (~50 users), and a stress test (~100 users). Over the course of these runs, the system handled **more than 4,300 requests**.",
      "Results showed that the application is **reliable**, with a **0% failure rate** across all tests. In the smoke test, response times were low, averaging **~62 ms**, and throughput reached **~14 requests per second**, demonstrating responsiveness at small scale. Under medium load (50 users, ~2,700 requests), throughput scaled to **~45 requests per second** with an average latency of **~374 ms**. Login remained very fast (**~8 ms**), while cart and checkout operations averaged around **400 ms**. Importantly, the system remained stable and error-free at this level of concurrency.",
      "Under stress conditions (**100 users**), throughput plateaued at **~14 requests per second**, and average latencies rose significantly to **~6 seconds**, with peaks over **8 seconds**. This degradation was isolated to write-heavy operations such as cart management, wishlist updates, and orders, while login continued to respond in single-digit milliseconds. The issue stems from **SQLite’s write-locking behavior**, which serializes concurrent writes.",
      "Overall, the results demonstrate that **WineEshop** is a functional and reliable backend capable of serving real users concurrently. It performs well for up to **~50 users**, making it suitable for a small-scale deployment, but it also highlights the importance of choosing the right database technology for scalability. A migration to **PostgreSQL** or enabling optimized **SQLite configurations** (e.g., **WAL mode**) would allow the system to support higher concurrency and reduce latency spikes under heavy load.",
      "This testing process not only validated the functionality of **WineEshop** but also gave me practical experience in **benchmarking transactional systems**, **identifying performance ceilings**, and **proposing concrete engineering solutions for scalability** — all while leading a project to completion and ensuring both technical and organizational success.",
      ],
      challenges: [
        "Balancing ACID guarantees with throughput under load.",
        "Maintaining clean separation of services and domain logic.",
      ],
      images: [
        "/images/wine1.png","/images/wine2.png","/images/wine3.png","/images/wine4.png","/images/wine5.png","/images/wine6.png",
      ],
    },
  {
    slug: "theater-booking-rmi",
    name: "Theater Booking System",
    description:
      "Distributed Java RMI system for seat reservations/cancellations with real-time availability and client notifications.",
    dateRange: "May 2025 – June 2025",
    skills: ["Java", "RMI", "Distributed Systems"],
    tech: ["Java", "RMI", "Concurrency"],
    highlights: [
      "Subscription-based notifications for newly available seats.",
      "Multi-zone pricing and availability tracking.",
    ],
    performance: [
        "As part of the development of the **Theater Booking System**, I designed and implemented a distributed Java application using **Remote Method Invocation (RMI)** to explore concepts of concurrency, synchronization, and scalability in a client–server architecture. The system provided a real-world simulation of theater seat reservations, including operations for **booking**, **cancellation**, **guest listing**, and a **subscription-based notification mechanism** to alert clients when seats became available after cancellations. Together, these features offered practical experience in building fault-tolerant distributed applications and benchmarking their performance under varying levels of client concurrency.",
        "The system was structured as a **multi-zone seat manager** supporting **900 seats across 5 distinct zones**, each with separate capacities and pricing. The server was built around an **RMI-exposed interface** (`THInterface`) with methods for seat operations, while clients communicated through remote stubs. Synchronization and concurrency control were enforced on the server side to guarantee **data consistency** under concurrent bookings and cancellations. To enhance user engagement, a notification subscription feature allowed clients who encountered a “no seats” response to be automatically informed when seats became available in their desired zone.",
        "To evaluate performance, I developed a **Java benchmark harness** (`BenchmarkTH`) that executed mixed workloads of booking, cancellation, and listing across multiple client threads. Workloads were run for fixed durations with client concurrency levels ranging from 1 to 50, with **latency percentiles (p50, p95, p99)** and **throughput (operations per second)** recorded. This design allowed for a systematic analysis of the system’s **scalability curve**, **tail latency behavior**, and **robustness under capacity exhaustion**.",
        "At low concurrency, results showed the system was extremely efficient. With **1 client**, throughput reached ~**299 ops/sec** with **p95 latency below 1 ms** for booking and cancellation operations. With **5 clients**, throughput peaked at ~**10.4k ops/sec**, with **p95 latencies ≤ 1.8 ms** across all operations. This represented the best balance of concurrency and throughput, confirming that the system scaled well under moderate parallel load.",
        "As concurrency increased beyond 6–8 clients, throughput began to plateau and tail latency grew. At **10 clients**, the system sustained ~**8.0k ops/sec** with **p95 < 3.5 ms** and **p99 < 6.5 ms**. At **20 clients**, throughput declined to ~**5.8k ops/sec**, with **p95 rising to ~8 ms** and **p99 approaching 13 ms**. With **50 clients**, throughput partially recovered to ~**8.5k ops/sec**, but **p95 latencies exceeded 14 ms** and worst-case requests took up to 196 ms. These results highlighted a **saturation point around 6–8 concurrent clients**, after which lock contention and frequent “no seats” rejects dominated performance.",
        "Throughout testing, the system remained **functionally correct and stable**. Once the 900-seat capacity was filled, subsequent booking attempts produced consistent **business-rule rejects (~60%)**, but the server exhibited **no crashes or RPC errors**. Notification subscriptions were delivered correctly on seat cancellation events, confirming the reliability of the event-driven component under stress.",
        "Overall, the Theater Booking System demonstrated the successful design of a distributed seat management platform with concurrency-safe operations, real-time availability tracking, and subscription-based notifications. Performance benchmarking revealed that the system performs exceptionally well at moderate concurrency but reaches saturation as contention increases. These findings emphasized the importance of **synchronization granularity, read–write balance, and workload patterns** in distributed service design.",
        "Beyond raw numbers, the project was an exercise in **scalability analysis, bottleneck identification, and reliability validation**. It strengthened my ability to design RMI-based systems, implement concurrency control, and interpret latency distributions in the context of user experience. Just as importantly, it underscored a key lesson in distributed system design: raw throughput is only one measure of success—**predictable tail latency and robustness under capacity limits are equally critical**.",
    ],
    images: [
      "/images/Theater1.png","/images/Theater2.png",
    ],
  },
    {
      slug: "chatterbox",
      name: "ChatterBox",
      description:
        "Built a cross-platform messaging app integrating a JavaFX frontend with a Flask + SQLite backend. Supported 100+ users with real-time chat and optimized for low-latency performance.",
      dateRange: "Dec 2024 – Feb 2025",
      skills: ["JavaFX", "Python", "Flask", "SQLite"],
      tech: ["JavaFX", "Flask", "SQLite", "REST APIs", "Locust"],
      highlights: [
        "Designed responsive JavaFX client with Flask REST backend.",
        "Achieved ~80 req/sec throughput with <20ms latency.",
      ],
      performance: [
        "As part of the development of **ChatterBox**, a cross-platform messaging application built with a JavaFX frontend and a Flask backend connected to a SQLite database, I conducted structured load testing to evaluate its performance, reliability, and scalability. The goal was to move beyond simply “making it work” and instead measure how the system behaves under real-world usage scenarios.",
        "Testing was performed using Locust, a Python load-testing framework, with three tiers of simulated usage: a light smoke test (around 10 users), a medium load test (50 users), and a stress test (100 users). Each simulated user performed typical actions such as registration, login, adding contacts, sending messages, and retrieving conversation history. Over the course of these runs, the system processed **over 9,700 requests.**",
        "The results showed that the application is **highly reliable**, with **0% failure rate** across all tests. At light load, response times were extremely low, averaging about **15 ms.** As the number of users increased, throughput scaled almost linearly: around **9 requests per second** in the smoke test, **40 requests per second** in the medium test, and up to **79 requests per second** during the stress test with 100 concurrent users. Importantly, the most critical endpoints (sending and loading messages) remained fast even under stress, with average response times consistently under **20 ms.**",
        "The main performance limitation was observed on the registration endpoint, which showed occasional latency spikes up to **1.2 seconds** during the stress test, likely due to database write contention in SQLite. While this did not impact ongoing chat performance, it highlights a clear optimization opportunity: migrating to a production-grade database such as PostgreSQL or enabling SQLite WAL mode would reduce lock contention and further improve scalability.",
        "In summary, this project gave me hands-on experience not only in building a working chat system but also in measuring its **scalability and bottlenecks**. It showed that ChatterBox can handle real-time use at scale while giving me practical insight into how to validate software performance under pressure.",
        "",
        "",
      ],
      images: [
        "/images/chatter1.png",
        "/images/chatter2.png",
        "/images/chatter3.png",
        "/images/chatter4.png",
        "/images/chatter5.png",
      ],
    },
    {
      slug: "mpi-math-toolkit",
      name: "MPI Math Toolkit",
      description:
        "MPI-based C applications for statistical analysis and sorting verification on datasets up to 10M elements, benchmarking parallel efficiency.",
      dateRange: "Jan 2025 – Feb 2025",
      skills: ["C", "MPI", "Parallel Computing"],
      tech: ["C", "MPI (Scatterv, Gatherv, Reduce, Scan)"],
      highlights: [
        "Implemented mean, variance, extrema, normalization, unsorted detection.",
        "Benchmarked on 1–16 processes.",
      ],
      performance: [
      "As part of the development of **MPI Math Toolkit**, I implemented two high-performance **C applications** using the **Message Passing Interface (MPI)** to explore parallel programming concepts and scalability in distributed environments. The project consisted of two modules: a **Sorting Verification Module**, which used point-to-point communication to distribute an input sequence across processes and detect the first unsorted element, and a **Statistical Analysis Module**, which employed MPI collective functions such as `Scatterv`, `Gatherv`, `Scan`, and `Reduce` to compute **mean, variance, minimum, maximum, normalized percentage vectors, and prefix sums** across large datasets. Together, these modules provided practical experience in implementing and analyzing MPI-based parallel algorithms.",

      "The applications were tested on randomly generated datasets of up to **10 million elements**, running with process counts ranging from **1 to 16**. The primary metrics measured were **runtime** and **throughput**, supported by correctness checks to ensure the validity of computed results. This experimental design allowed for both **performance benchmarking** and an evaluation of the trade-offs between computation and communication overhead in MPI programs.",

      "For the **Sorting Verification Module**, results showed that **single-process execution** was extremely fast, completing in just **7 microseconds** for 10 million elements. At this scale, adding more processes introduced **communication overhead** that outweighed the benefits of parallel computation. Performance decreased noticeably with **2–4 processes** and degraded further with **8–16 processes**, where throughput dropped by several orders of magnitude. These results highlighted that this problem, being **computation-light and communication-heavy**, is not well suited for distributed execution at moderate input sizes.",

      "The **Statistical Analysis Module** produced more substantial runtimes, with the single-process execution taking **9.6 seconds** on 10 million doubles. While the program delivered correct results across all runs, parallel execution did **not lead to speedup**. With **2 processes**, performance worsened slightly, and with **4–16 processes**, runtimes grew significantly, reaching over **61 seconds** with 16 processes. Throughput fell proportionally, confirming that **communication costs from collective operations dominated** the overall runtime. This outcome reinforced the understanding that MPI excels when the per-process workload is **computationally intensive**, whereas lightweight aggregation tasks suffer from **overhead**.",

      "Overall, the **MPI Math Toolkit** demonstrated the successful implementation of **parallel algorithms** and provided valuable insights into the behavior of **distributed systems**. The project revealed that the **Sorting Verification Module** is extremely efficient in sequential form and does not benefit from parallelism at this scale, while the **Statistical Analysis Module** exposed the **scalability limitations** of collective communication in compute-light workloads. These findings emphasized the importance of **workload size, communication patterns, and algorithm design** when evaluating parallel efficiency.",

      "Beyond the raw numbers, the project was an exercise in **benchmarking, scalability analysis, and bottleneck diagnosis**. It strengthened my ability to design MPI-based solutions, analyze their performance under varying workloads, and draw engineering conclusions about **parallel efficiency**. Just as importantly, it underscored a key lesson in **high-performance computing**: parallelism is not universally beneficial, and understanding **where it breaks down** is as valuable as achieving speedup."
       ],
      images: [
        "/images/MPIMath1.png", "/images/MPIMath2.png",
      ],
      challenges: [
        "Balancing workload distribution and communication overhead.",
      ],
    },
    {
      slug: "pacman-ai-solver",
      name: "Pacman AI Solver",
      description:
        "AI solver in Python using DFS, BFS, and A* with custom heuristics to optimize puzzle-solving efficiency and path quality.",
      dateRange: "Jan 2025 – Feb 2025",
      skills: ["Python", "AI", "Algorithms"],
      tech: ["Python", "Search Algorithms", "Heuristics"],
      highlights: [
        "Implemented multiple search strategies: DFS, BFS, A*.",
        "Custom heuristics reduced expansions by 43% over BFS.",
      ],
      performance: [
        "Experiments across both **small (6 cells)** and **larger (14 cells)** Pacman puzzles reveal how problem scale affects the efficiency of **uninformed** and **informed search algorithms**. On the smaller state, **DFS** produced a **long path (38 steps)** but required relatively few expansions (**16 nodes**), while **BFS** achieved the **shortest solution (7 steps)** at the cost of exploring more nodes (**18**). **A*** heuristics provided strong guidance: the **sum-based heuristic** minimized expansions (**8**) while preserving **optimality**, whereas **nearest** and **max heuristics** balanced solution length with moderate exploration. In this small domain, **A*** significantly **reduced runtime** while maintaining competitive solution quality, highlighting the advantage of heuristic search when the state space is limited.",
        
        "Scaling to a **14-cell problem** magnified the differences. **DFS** expanded **54 nodes** and returned an **excessively long path (38 steps)**, underscoring its **lack of optimality**. **BFS** remained **optimal (22 steps)** but at the cost of **198 node expansions**, making it **computationally expensive**. The heuristic variants of **A*** displayed distinct trade-offs: the **nearest-distance heuristic** guided the search to an **almost-optimal path (21 steps)** but required **154 expansions**; the **sum heuristic** was **fastest (12.5ms)** yet sacrificed path quality with a **46-step solution**; and the **max heuristic** achieved a **middle ground** with a **24-step solution** and only **128 expansions**.",
        
        "Taken together, these results highlight two key insights: (1) **Uninformed strategies** are predictable but **scale poorly** — **DFS** suffers from **non-optimal paths**, while **BFS** incurs **prohibitive exploration costs**; and (2) **Heuristic design** critically determines **performance in A***, dictating the **balance between solution quality, search effort, and runtime**.",
        
        "These experiments demonstrate both the **theoretical underpinnings of search strategies** and the **practical implications of heuristic selection** in AI problem-solving.",
      ],
      images: [
        "/images/AIPacman1.png","/images/AIPacman2.png","/images/AIPacman3.png","/images/AIPacman4.png","/images/AIPacman5.png","/images/AIPacman6.png",
      ],
    },
    {
      slug: "distributed-vector-computation",
      name: "Distributed Vector Computation System",
      description:
        "Distributed C system that combines TCP sockets with ONC RPC to compute vector operations remotely (dot product, per-vector averages, and scalar scaling) via a socket client → RPC bridge → RPC server pipeline.",
      dateRange: "Mar 2025 – Apr 2025",
      skills: ["C", "TCP Sockets", "RPC", "Distributed Systems"],
      tech: ["C", "ONC RPC (rpcgen)", "TCP/IP", "Forked Concurrency"],
      highlights: [
        "Three-component architecture: socket client, RPC client (bridge), and RPC server implementing the computation logic.",
        "Implements dot product, independent per-vector averages, and r×X scaling through RPC procedures defined in rpc.x.",
        "Bridge service accepts multiple TCP clients and forwards requests to the RPC server, returning results over the socket.",
        "Clear separation of transport (sockets) and computation (RPC), with structured memory management and modular code."
      ],
      performance: [
        "Designed for low-latency, request/response workloads with simple binary payloads over TCP. Fork-based concurrency on the bridge enables serving multiple clients concurrently without blocking the RPC pipeline.",
        "Operation complexity is linear in vector length (O(n)); end-to-end response time scales primarily with vector size and network RTT. For classroom/lab deployments across LAN, interactions remain responsive for typical n.",
        "Experimental focus was on correctness and distributed flow (socket → RPC → socket) rather than micro-optimization; the codebase emphasizes clarity of IPC boundaries and reliability under repeated calls."
      ],
      challenges: [
        "Coordinating data marshaling between raw socket I/O and RPC stubs while avoiding memory leaks.",
        "Maintaining concurrency-safety in the bridge process model and cleanly handling client disconnects.",
        "Designing RPC interfaces that are expressive yet simple enough for portable implementations."
      ],
      images: [
        "/images/DestrVector1.png",
      ],
    },/*
    {
      slug: "local-business-website",
      name: "Local Business Website",
      description:
        "Responsive website for a local business, improving calls by 97% and profile views by 66% through SEO and user-focused design.",
      dateRange: "Feb 2024 – Mar 2024",
      skills: ["HTML", "CSS", "JavaScript", "SEO"],
      tech: ["HTML", "CSS", "JavaScript"],
      highlights: [
        "Improved digital presence with responsive design.",
        "Applied SEO strategy for local reach.",
      ],
      images: [
        "/images/12.png",
      ],
    },
    {
      slug: "hexadecimal-votes-analyzer",
      name: "Hexadecimal Votes Analyzer",
      description:
        "C program to decode and analyze hexadecimal-encoded voter data with bitwise operations, producing demographic reports and ASCII histograms.",
      dateRange: "Dec 2022 – Jan 2023",
      skills: ["C", "Bitwise Operations", "Data Processing"],
      tech: ["C", "Memory Management", "Bitwise Operators"],
      highlights: [
        "Parsed age, gender, and votes from encoded data.",
        "Generated ASCII histograms for trends visualization.",
      ],
      images: [
        "/images/12.png",
      ],
    },*/
  ],
  experience: [
    {
      company: "Family Tourism Business",
      title: "Operations Assistant",
      dateRange: "June 2017 – August 2024",
      bullets: [
        "Supported business operations in the tourism sector for 5+ years.",
        "Developed adaptability, organizational skills, and client service expertise.",
        "Contributed to customer relations, conflict resolution, and teamwork.",
      ],
    },
    {
      company: "Hospitality",
      title: "Senior Waiter",
      dateRange: "2021 – 2023",
      bullets: [
        "Delivered high-quality service in a fast-paced environment.",
        "Strengthened communication and interpersonal skills.",
        "Developed problem-solving and multitasking under pressure.",
      ],
    },
    {
      company: "University & Independent Projects",
      title: "Software Engineer (Student/Independent)",
      dateRange: "2022 – Present",
      bullets: [
        "Completed multiple independent and academic software projects.",
        "Focused on distributed systems, parallel computing, and full-stack apps.",
        "Led project architecture and documentation in team settings.",
      ],
    },
  ],
  education: [
    {
      school: "University of West Attica",
      degree:
        "B.S. & Integrated M.S. in Informatics and Computer Engineering (Expected October 2027)",
      dateRange: "2022 – 2027",
      achievements: [
        "Concentration in Software and Information Systems",
        "Relevant coursework: Data Structures & Algorithms, Operating Systems, Machine Learning, AI, Network Programming",
      ],
    },
  ],
};
