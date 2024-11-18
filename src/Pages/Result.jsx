import React, { useState } from 'react'
import { Button, Table } from "flowbite-react";
import { Modal } from "flowbite-react";



const Result = () => {


    const data = [
        {
           id:1,
           job:"Full-Stack Developer",
           job_discription:`

Job Title: Full-Stack Developer

Job Summary:
We are seeking a highly skilled Full-Stack Developer to join our dynamic team. The ideal candidate will have expertise in developing both frontend and backend systems, ensuring seamless integration and optimal performance of web applications. You will work closely with cross-functional teams to design, build, and maintain robust, scalable, and user-friendly applications.

Key Responsibilities:
Frontend Development:

Build responsive and user-friendly interfaces using HTML5, CSS3, JavaScript, and modern frameworks like React, Angular, or Vue.js.
Ensure cross-browser compatibility and optimize applications for maximum speed and scalability.
Collaborate with UI/UX designers to implement visual designs and improve user experiences.
Backend Development:

Develop and maintain server-side logic using Node.js, Python, Ruby, or other backend technologies.
Create RESTful APIs or GraphQL endpoints to connect frontend interfaces with backend services.
Implement authentication and authorization solutions using JWT, OAuth, or similar technologies.
Database Management:

Design, develop, and optimize relational (MySQL, PostgreSQL) or NoSQL (MongoDB, Firebase) databases.
Implement data storage solutions ensuring reliability and security.
Integration and Deployment:

Set up and manage cloud services (AWS, Azure, Google Cloud) for hosting and deployment.
Use DevOps tools like Docker, Kubernetes, and CI/CD pipelines for automated testing and deployment.
Testing and Debugging:

Conduct thorough testing of applications (unit testing, integration testing) to ensure reliability.
Troubleshoot and debug application issues, identifying and resolving bottlenecks.
Collaboration and Communication:

Work closely with product managers, designers, and other developers to understand project requirements.
Document technical designs, processes, and implementation details.
Participate in code reviews and knowledge-sharing sessions.
Required Skills and Qualifications:
Proven experience as a Full-Stack Developer or similar role.
Proficiency in frontend frameworks (React, Angular, Vue.js) and backend technologies (Node.js, Django, Flask).
Strong knowledge of HTML5, CSS3, JavaScript, and modern ES6+ features.
Experience with database management (SQL and NoSQL).
Familiarity with version control systems (Git, GitHub, GitLab).
Understanding of security practices, such as SSL, CORS, CSRF, and secure coding.
Excellent problem-solving and analytical skills.
Strong communication and teamwork abilities.



           
           
           
           
           
           `,
           resuma:`
[Name]
Location: [City, Country]
Email: [Your Email] | Phone: [Your Number] | GitHub: [GitHub Link] | LinkedIn: [LinkedIn Profile]

Professional Summary
Highly skilled Full-Stack Developer with 4+ years of experience in building scalable web applications using the MERN stack. Adept at managing both front-end and back-end development, and experienced in collaborating with teams to deliver user-centered digital products.

Technical Skills

Frontend: React.js, HTML5, CSS3, JavaScript (ES6+), Bootstrap 5, Tailwind CSS
Backend: Node.js, Express.js, MongoDB
Version Control: Git, GitHub
Payment Integration: Stripe, PayPal
Tools: Docker, Postman, Jenkins
Professional Experience
Full-Stack Developer | XYZ Company
January 2021 – Present

Developed and deployed a customer-facing e-commerce web application using the MERN stack.
Built responsive UI components and integrated API calls for seamless user interaction.
Optimized backend performance, resulting in a 30% reduction in load time.
Education
Bachelor’s Degree in Computer Science | [University Name] | 2020
           `,
           scoures:8
        },
        {
            id:2,
            job:" System Administrator",
            job_discription:`
Job Title: System Administrator

Job Summary:
We are looking for a skilled System Administrator to join our IT team. The System Administrator will be responsible for maintaining, upgrading, and managing our software, hardware, and networks. You will diagnose and resolve technical issues, ensure the highest levels of systems and infrastructure availability, and provide reliable IT services to support the organization's operations.

Key Responsibilities:
System Maintenance and Management:

Install, configure, and maintain servers, operating systems, and applications.
Monitor system performance and troubleshoot hardware and software issues.
Perform routine system updates, patches, and upgrades.
Network Management:

Manage and configure LAN/WAN, firewalls, and VPNs to ensure secure and efficient network connectivity.
Monitor and maintain network infrastructure to prevent downtime or performance issues.
Troubleshoot network-related problems and optimize performance.
Security and Backup:

Implement and manage security protocols, firewalls, and intrusion detection systems.
Ensure the security of data, networks, and systems through regular audits and vulnerability assessments.
Schedule and manage backups and recovery procedures to ensure data integrity.
User Support:

Provide technical support to staff for hardware, software, and network-related issues.
Manage user accounts, permissions, and access rights on the network.
Conduct training sessions or create documentation to assist users with IT systems.
Infrastructure Development:

Plan and implement new IT solutions to improve the organization's efficiency.
Research and recommend technologies that align with organizational goals.
Manage IT inventory, including hardware, software licenses, and peripherals.
Monitoring and Reporting:

Monitor systems to detect potential issues and ensure optimal performance.
Maintain accurate documentation of system configurations, processes, and procedures.
Generate regular reports on system performance and usage.
Required Skills and Qualifications:
Proven experience as a System Administrator, Network Administrator, or similar role.
Expertise in operating systems like Windows, Linux, or macOS.
Strong knowledge of networking concepts, including TCP/IP, DNS, DHCP, and VPN.
Experience with virtualization technologies (VMware, Hyper-V) and cloud platforms (AWS, Azure, Google Cloud).
Familiarity with system security tools and best practices.
Strong problem-solving and troubleshooting skills.
Excellent organizational and communication skills.
Ability to work independently and as part of a team.



            `,
            resuma:`

            [Your Name]
Location: [City, Country]
Email: [Your Email] | Phone: [Your Number]
LinkedIn: [LinkedIn Profile] | GitHub: [GitHub Profile]

Professional Summary
Detail-oriented and results-driven System Administrator with over 5 years of experience in managing, supporting, and optimizing IT infrastructures. Proficient in network administration, server management, troubleshooting, and system configuration. Strong background in maintaining system security, ensuring smooth operations, and supporting the end-user community in a fast-paced work environment.

Technical Skills
Operating Systems: Windows Server, Linux (Ubuntu, CentOS), macOS
Networking: TCP/IP, DNS, DHCP, VPN, Firewalls, Routing & Switching
Server Management: Active Directory, DNS, DHCP, IIS, Apache, Nginx
Virtualization: VMware, Hyper-V, VirtualBox
Cloud Platforms: AWS, Azure
Scripting: PowerShell, Bash
Security: Firewall Configuration, SSL, VPNs, Antivirus Management
Backup & Recovery: Veeam, Acronis, Bacula
Monitoring Tools: Nagios, Zabbix, SolarWinds, Prometheus
Version Control: Git, GitHub
Tools: ServiceNow, Jira, Remedy, Remote Desktop, SSH
Professional Experience
System Administrator | ABC Technologies
June 2019 – Present

Manage and maintain company IT infrastructure, including 200+ servers, network devices, and workstations.
Administer Active Directory, configure user permissions, and manage group policies across the organization.
Implement and manage VPN solutions, ensuring secure remote access for over 500 employees.
Perform regular system backups, software updates, and patch management to ensure maximum uptime and security.
Troubleshoot and resolve server, network, and workstation issues, reducing downtime by 30%.
Monitor system performance using Nagios, proactively identifying potential issues before they affect operations.
Provide 2nd and 3rd-level support to end users, handling escalated issues with a 95% resolution rate.
Junior System Administrator | XYZ Corp.
July 2016 – May 2019

Assisted in the setup, configuration, and troubleshooting of servers and network devices.
Supported daily maintenance of Windows and Linux-based servers, ensuring security and performance.
Managed user accounts, group policies, and permissions through Active Directory.
Implemented and maintained system backups using Veeam Backup and Recovery solutions.
Monitored network traffic and responded to security incidents and potential threats.
Assisted in the deployment and configuration of company-wide software applications.
Education
Bachelor’s Degree in Information Technology
[University Name], [Year of Graduation]
Relevant coursework: Network Security, Operating Systems, Database Administration, Cloud Computing

Certifications
CompTIA Network+ Certification | [Year]
Microsoft Certified: Azure Administrator Associate | [Year]
Red Hat Certified System Administrator (RHCSA) | [Year]
Certified Information Systems Security Professional (CISSP) | [Year]
Projects
Project 1: Server Migration

Led the migration of 50+ on-premise servers to a cloud-based environment (AWS).
Reduced server maintenance costs by 40% and improved scalability.
Worked closely with DevOps teams to ensure a seamless transition with minimal downtime.
Project 2: Network Infrastructure Overhaul

Designed and implemented a new network infrastructure for the company, including upgrading routers, switches, and firewalls.
Increased network speed and reliability, reducing latency by 20%.
Implemented a monitoring system that improved system visibility and allowed for faster troubleshooting.
Professional Development
AWS Certified Solutions Architect – Associate (In Progress)
Attended multiple workshops on advanced networking, cloud security, and Linux server administration.
Regular participant in online forums and groups (e.g., StackOverflow, Spiceworks) for ongoing learning.
References
Available upon request.



            `,
            scoures:8
         },
         {
            id:3,
            job:"Network Engineer",
            job_discription:`
Job Title: Network Engineer

Job Summary:
We are seeking a talented and detail-oriented Network Engineer to design, implement, and maintain our organization’s network infrastructure. The Network Engineer will ensure that all systems operate efficiently, securely, and reliably. This role involves collaborating with other IT team members to troubleshoot issues, improve network performance, and support future growth.

Key Responsibilities:
Network Design and Implementation:

Design and implement scalable and reliable network solutions for local area networks (LAN), wide area networks (WAN), and wireless networks.
Configure and manage routers, switches, firewalls, and other network devices.
Ensure proper documentation of network architecture and configurations.
Maintenance and Monitoring:

Monitor network performance and troubleshoot issues to minimize downtime.
Conduct regular maintenance, updates, and upgrades to network hardware and software.
Set up network monitoring tools to identify and resolve potential issues proactively.
Security Management:

Implement network security protocols to protect against unauthorized access and cyber threats.
Manage firewalls, VPNs, and intrusion detection systems.
Perform regular vulnerability assessments and network audits.
Troubleshooting and Support:

Diagnose and resolve hardware, software, and network connectivity issues.
Provide technical support to users and IT team members for network-related problems.
Maintain SLAs by ensuring quick response times and resolutions.
Planning and Optimization:

Evaluate current network infrastructure and recommend improvements or new technologies to enhance performance.
Plan and execute network expansions or upgrades to support organizational growth.
Optimize network configurations for better reliability and efficiency.
Collaboration and Training:

Work closely with IT and operations teams to ensure seamless integration of network systems.
Provide training and documentation to support IT staff and end-users.
Participate in planning for disaster recovery and business continuity.
Required Skills and Qualifications:
Proven experience as a Network Engineer or in a similar role.
Strong understanding of networking protocols (e.g., TCP/IP, BGP, OSPF, DNS, DHCP, VLANs).
Hands-on experience with network hardware (routers, switches, firewalls).
Familiarity with network monitoring tools (e.g., SolarWinds, Wireshark, Nagios).
Knowledge of network security best practices.
Excellent problem-solving and analytical skills.
Strong communication skills for collaboration and documentation.
            
            `,
            resuma:`
[Name]
Location: [City, Country]
Email: [Your Email] | Phone: [Your Number] | LinkedIn: [LinkedIn Profile] | GitHub: [GitHub Link]

Professional Summary
Network Engineer with 4+ years of experience designing, implementing, and managing network infrastructure. Proficient in configuring and troubleshooting routers, switches, firewalls, and network protocols.

Skills

Networking: TCP/IP, DNS, DHCP, VPN, VLAN
Tools: Wireshark, Cisco Packet Tracer, Nagios
Cloud: AWS Networking, GCP
Security: Firewall Configuration, SSL, VPN
Professional Experience
Network Engineer | Global Networks Inc.
June 2020 – Present

Designed and implemented network architectures for large-scale enterprises, enhancing network uptime by 20%.
Configured and maintained routers, switches, and firewalls for secure data communication.
Optimized network performance by identifying bottlenecks and implementing solutions.
Education
Bachelor’s Degree in Information Technology | [University Name] | 2019

            
`,
            scoures:8
         },
         {
            id:4,
            job:"Cybersecurity Specialist",
            job_discription:`
Job Title: Cybersecurity Specialist

Job Summary:
We are seeking a highly skilled Cybersecurity Specialist to safeguard our organization's systems, networks, and data from potential threats. You will be responsible for designing and implementing security measures, monitoring for security breaches, and responding to incidents. This role requires a proactive and detail-oriented professional with a deep understanding of current cybersecurity technologies and trends.

Key Responsibilities:
Threat Assessment and Vulnerability Management:

Identify, assess, and prioritize cybersecurity risks and vulnerabilities.
Perform regular security audits, penetration testing, and vulnerability assessments.
Recommend and implement mitigations for identified risks.
Security Design and Implementation:

Develop and enforce security policies, procedures, and protocols.
Configure, deploy, and manage firewalls, antivirus programs, and intrusion detection/prevention systems.
Ensure systems comply with organizational security standards and industry regulations.
Monitoring and Incident Response:

Monitor networks and systems for security breaches or anomalies.
Investigate and respond to security incidents, including root cause analysis and reporting.
Lead or assist in incident recovery and forensic analysis.
Security Awareness and Training:

Provide training to staff on security best practices and emerging threats.
Create and promote a culture of cybersecurity awareness across the organization.
Develop resources such as guides and checklists to assist staff in maintaining security compliance.
Documentation and Reporting:

Maintain detailed records of security incidents, audits, and compliance measures.
Prepare regular reports for management on the organization’s security posture.
Collaborate with IT teams to document system configurations and changes.
Research and Continuous Improvement:

Stay updated on the latest cybersecurity threats, trends, and technologies.
Evaluate new tools and solutions to enhance the organization’s cybersecurity defenses.
Participate in industry forums and collaborate with external cybersecurity professionals.
Required Skills and Qualifications:
Proven experience in a cybersecurity role, such as Cybersecurity Analyst or Information Security Specialist.
In-depth knowledge of security frameworks (e.g., NIST, ISO 27001).
Hands-on experience with firewalls, VPNs, SIEM systems, and endpoint protection tools.
Strong understanding of networking protocols (TCP/IP, DNS, HTTPS) and operating systems (Windows, Linux).
Proficiency in penetration testing tools (e.g., Metasploit, Burp Suite, Nessus).
Excellent problem-solving and critical-thinking skills.
Strong communication skills for collaborating with teams and presenting to stakeholders.

            `,
            resuma:`
[Your Name]
Location: [City, Country]
Email: [Your Email] | Phone: [Your Number]
LinkedIn: [LinkedIn Profile] | GitHub: [GitHub Profile]

Professional Summary
Detail-oriented and results-driven Cybersecurity Specialist with over 4 years of experience in securing networks, systems, and applications against potential threats. Skilled in vulnerability assessments, risk management, penetration testing, and incident response. Adept at developing security policies and ensuring compliance with industry standards. Passionate about identifying vulnerabilities and implementing measures to safeguard organizational data and infrastructure.

Technical Skills
Cybersecurity Tools: Nessus, Wireshark, Nmap, Metasploit, Burp Suite, Snort
Security Protocols: SSL/TLS, IPsec, VPN, IDS/IPS
Cryptography: RSA, AES, SHA, HMAC
Operating Systems: Windows, Linux (Ubuntu, Kali), MacOS
Networking: TCP/IP, DNS, DHCP, Firewalls, VPNs, Routing & Switching
Vulnerability Management: Risk Assessment, Penetration Testing, Vulnerability Scanning
Incident Response: Forensics, Log Analysis, SIEM (Splunk, SolarWinds)
Compliance: GDPR, HIPAA, PCI DSS, ISO 27001
Cloud Security: AWS, Azure
Scripting: Python, Bash, PowerShell
Professional Experience
Cybersecurity Specialist | SecureTech Solutions
June 2021 – Present

Led security assessments, identifying vulnerabilities and recommending solutions for clients in finance, healthcare, and e-commerce sectors.
Conducted penetration testing on web applications, network infrastructure, and databases, identifying and exploiting security weaknesses.
Developed and implemented security policies, procedures, and risk management strategies in alignment with industry standards.
Monitored network traffic for malicious activity using Snort and Wireshark, ensuring real-time detection and incident response.
Managed and configured firewalls, VPNs, and IDS/IPS systems to enhance network security.
Provided training and awareness sessions to employees on best security practices, phishing, and social engineering attacks.
Implemented encryption solutions for data protection, ensuring compliance with GDPR and PCI DSS requirements.
IT Security Analyst | CyberGuard Systems
January 2018 – May 2021

Monitored and responded to security incidents using SIEM tools (Splunk, SolarWinds), reducing incident response time by 30%.
Assisted in securing cloud environments on AWS and Azure by configuring security groups, firewalls, and VPNs.
Conducted vulnerability assessments using tools such as Nessus and OpenVAS, identifying and mitigating risks across internal systems.
Collaborated with cross-functional teams to design secure systems and applications, ensuring secure development practices and compliance.
Performed data backups, patch management, and software updates to ensure systems were protected against the latest threats.
Participated in regular audits and compliance checks to ensure company systems met industry standards and regulations (e.g., HIPAA, PCI DSS).
Education
Bachelor’s Degree in Cybersecurity
[University Name], [Year of Graduation]
Relevant Coursework: Network Security, Ethical Hacking, Cryptography, Digital Forensics, Risk Management, Malware Analysis

Certifications
Certified Information Systems Security Professional (CISSP) | [Year]
Certified Ethical Hacker (CEH) | [Year]
CompTIA Security+ | [Year]
Certified Cloud Security Professional (CCSP) | [Year]
Certified Information Security Manager (CISM) | [Year]
Projects
Project 1: Penetration Testing for a Financial Institution

Conducted penetration testing for a major financial institution, identifying critical vulnerabilities and providing solutions to mitigate risk.
Exploited network and web application vulnerabilities using Metasploit and Burp Suite, resulting in enhanced security measures.
Project 2: Cloud Security Implementation

Designed and implemented security measures for cloud environments (AWS and Azure), ensuring secure access control, data encryption, and vulnerability management.
Created automated scripts for monitoring cloud environments and ensuring compliance with security policies.
Professional Development
Advanced Penetration Testing Course – [Platform Name]
Cloud Security for AWS – [Platform Name]
Regular participant in cybersecurity forums and workshops (e.g., DEF CON, Black Hat).
References
Available upon request.


            `,
            scoures:8
         },
         {
            id:5,
            job:"Database Administrator",
            job_discription:`
Job Title: Database Administrator

Job Summary:
We are seeking a detail-oriented and experienced Database Administrator (DBA) to manage and maintain our organization's databases. The DBA will be responsible for ensuring database performance, security, and availability while optimizing data access and storage. This role requires expertise in database management systems and a proactive approach to problem-solving.

Key Responsibilities:
Database Design and Management:

Design, implement, and maintain database systems to meet the organization’s needs.
Create database schemas, tables, and structures based on application requirements.
Ensure data integrity, consistency, and accuracy.
Performance Optimization:

Monitor and optimize database performance through indexing, query tuning, and capacity planning.
Conduct regular maintenance tasks such as backups, defragmentation, and performance testing.
Address database issues promptly to minimize downtime.
Security and Access Control:

Implement and manage database security measures to protect sensitive data.
Set up user roles and permissions to control access.
Conduct regular security audits and update systems against vulnerabilities.
Backup and Recovery:

Schedule and manage database backups to ensure data is protected.
Develop and test disaster recovery plans to restore databases in the event of data loss.
Ensure backups are stored securely and accessible for recovery.
Troubleshooting and Support:

Diagnose and resolve database-related issues quickly and efficiently.
Provide technical support to application developers and other IT team members.
Document solutions and provide training to ensure consistent practices.
Database Upgrades and Migrations:

Plan and execute database upgrades, migrations, and patches with minimal impact on operations.
Evaluate and recommend new database technologies and tools.
Collaborate with system administrators and developers for seamless integration.
Required Skills and Qualifications:
Proven experience as a Database Administrator or similar role.
Expertise in database systems such as MySQL, PostgreSQL, Oracle, MongoDB, or Microsoft SQL Server.
Strong knowledge of SQL and database programming.
Experience with database design, performance tuning, and troubleshooting.
Familiarity with data backup, recovery, and security protocols.
Strong problem-solving and analytical skills.
Excellent communication and teamwork abilities.

            `,
            resuma:`
[Name]
Location: [City, Country]
Email: [Your Email] | Phone: [Your Number] | LinkedIn: [LinkedIn Profile] | GitHub: [GitHub Link]

Professional Summary
Experienced Database Administrator with over 6 years of expertise in managing and securing relational and NoSQL databases. Skilled in performance tuning, backup management, and ensuring high availability for mission-critical databases.

Skills

Databases: MySQL, PostgreSQL, MongoDB
Tools: SQL Server Management Studio, pgAdmin
Performance Tuning: Query Optimization, Indexing
Backup/Recovery: Backup Strategies, Replication
Cloud: AWS RDS, Google Cloud SQL
Professional Experience
Database Administrator | TechSys Solutions
May 2018 – Present

Managed and optimized databases for a high-traffic e-commerce platform, improving response times by 35%.
Implemented backup and recovery strategies, ensuring 99.9% uptime.
Performed database migrations and upgrades with minimal downtime.
Education
Bachelor’s Degree in Computer Science | [University Name] | 2017

            
`,
            scoures:8
         },
         {
            id:6,
            job:"Cloud Engineer",
            job_discription:`
Job Title: Cloud Engineer

Job Summary:
We are seeking a skilled Cloud Engineer to design, implement, and maintain scalable cloud-based solutions to support our organization’s digital transformation. The Cloud Engineer will collaborate with cross-functional teams to develop cloud architecture, ensure system reliability, and optimize cloud infrastructure performance. This role requires a strong understanding of cloud platforms, automation tools, and security practices.

Key Responsibilities:
Cloud Architecture and Deployment:

Design, deploy, and manage scalable, secure, and cost-efficient cloud infrastructure.
Develop cloud solutions using platforms such as AWS, Azure, or Google Cloud.
Implement best practices for cloud deployments, including infrastructure as code (IaC).
System Maintenance and Optimization:

Monitor cloud systems for performance and reliability.
Optimize cloud resources to ensure cost-effectiveness and efficiency.
Perform regular system updates, backups, and disaster recovery testing.
Automation and Scripting:

Develop automation scripts for deployment, monitoring, and maintenance tasks.
Utilize tools like Terraform, Ansible, or CloudFormation to manage infrastructure as code.
Streamline workflows to reduce manual intervention and enhance scalability.
Security and Compliance:

Implement cloud security measures, including access control, encryption, and threat detection.
Ensure cloud environments comply with industry regulations and organizational policies.
Conduct security audits and vulnerability assessments.
Collaboration and Support:

Work with development, operations, and IT teams to ensure seamless integration of cloud services.
Provide support for troubleshooting and resolving cloud-related issues.
Document processes, architectures, and solutions for team reference.
Continuous Learning and Improvement:

Stay updated on emerging cloud technologies and trends.
Evaluate new tools and services to enhance the organization’s cloud strategy.
Propose and implement innovative cloud solutions to meet business needs.
Required Skills and Qualifications:
Proven experience as a Cloud Engineer or similar role.
Expertise in cloud platforms (AWS, Azure, Google Cloud) and associated services.
Strong understanding of networking, virtualization, and containerization (e.g., Docker, Kubernetes).
Experience with CI/CD pipelines and DevOps practices.
Proficiency in programming or scripting languages (Python, Bash, PowerShell).
Familiarity with monitoring and logging tools (e.g., CloudWatch, Azure Monitor).
Excellent problem-solving and communication skills.

            `,
            resuma:`
[Name]
Location: [City, Country]
Email: [Your Email] | Phone: [Your Number] | LinkedIn: [LinkedIn Profile] | GitHub: [GitHub Link]

Professional Summary
Cloud Engineer with 3+ years of experience in deploying, managing, and maintaining cloud infrastructures. Skilled in cloud services (AWS, Azure), automation, and serverless architectures.

Skills

Cloud Platforms: AWS, Azure, GCP
Tools: Terraform, Ansible, Jenkins
DevOps: CI/CD, Automation, Kubernetes
Monitoring: CloudWatch, Prometheus, Grafana
Professional Experience
Cloud Engineer | CloudX Technologies
May 2020 – Present

Deployed and managed cloud infrastructure on AWS, ensuring high availability and disaster recovery.
Automated infrastructure provisioning using Terraform and Ansible.
Monitored cloud resources and optimized usage for cost efficiency.
Education
Bachelor’s Degree in Computer Engineering | [University Name] | 2019


            `,
            scoures:8
         },
         {
            id:7,
            job:"IT Support Specialist",
            job_discription:`
Job Title: IT Support Specialist

Job Summary:
We are seeking a detail-oriented and customer-focused IT Support Specialist to provide technical assistance and support to end-users for hardware, software, and network-related issues. The IT Support Specialist will play a key role in maintaining the organization’s IT infrastructure and ensuring smooth day-to-day operations by troubleshooting problems, implementing solutions, and delivering exceptional service.

Key Responsibilities:
Technical Support:

Provide timely and effective technical support for hardware, software, and network-related issues.
Respond to inquiries via phone, email, or in-person and document issues in the ticketing system.
Assist with the installation, configuration, and maintenance of IT equipment and applications.
Troubleshooting:

Diagnose and resolve hardware, software, and network issues for desktops, laptops, printers, and mobile devices.
Escalate complex problems to higher-level support or vendors as necessary.
Perform root cause analysis to prevent recurring issues.
User Training and Assistance:

Educate end-users on best practices for using IT systems and software.
Develop and maintain user manuals, FAQs, and training resources.
Assist with onboarding new employees by setting up accounts, devices, and tools.
System Maintenance:

Perform regular updates and maintenance on systems to ensure security and reliability.
Monitor IT systems and networks for performance and security issues.
Collaborate with IT teams to implement upgrades and patches.
Inventory and Documentation:

Maintain an accurate inventory of IT assets, including hardware and software licenses.
Document support requests, resolutions, and procedures for future reference.
Assist in the development of IT policies and procedures.
Collaboration and Improvement:

Work closely with IT team members to support larger projects and initiatives.
Identify opportunities to improve processes and enhance user experiences.
Stay updated on emerging technologies and recommend upgrades to tools and systems.
Required Skills and Qualifications:
Proven experience as an IT Support Specialist, Help Desk Technician, or similar role.
Strong knowledge of operating systems (Windows, macOS, Linux) and office productivity tools (Microsoft Office, Google Workspace).
Familiarity with networking concepts (LAN, WAN, VPN, DNS).
Hands-on experience with troubleshooting hardware and software issues.
Excellent problem-solving and communication skills.
Ability to manage multiple tasks and prioritize effectively.
Customer-focused mindset and strong interpersonal skills.

            
            
            `,
            resuma:`
            
[Name]
Location: [City, Country]
Email: [Your Email] | Phone: [Your Number] | LinkedIn: [LinkedIn Profile] | GitHub: [GitHub Link]

Professional Summary
Experienced IT Support Specialist with 4+ years in troubleshooting hardware and software issues, providing technical support to end-users, and ensuring smooth IT operations within an organization.

Skills

Tools: ServiceNow, Zendesk
Operating Systems: Windows, MacOS, Linux
Networking: TCP/IP, DNS, DHCP
Troubleshooting: Hardware, Software, Networking
Scripting: PowerShell, Bash
Professional Experience
IT Support Specialist | TechCare Solutions
June 2019 – Present

Provided technical support to over 200 employees, resolving hardware and software issues.
Managed and maintained IT infrastructure, including network devices and servers.
Configured and deployed workstations and printers for new employees.
Education
Associate’s Degree in Information Technology | [University Name] | 2018


            `,
            scoures:8
         },
         {
            id:8,
            job:"MERN STACK",
            job_discription:`
Job Title: MERN Stack Developer

Job Summary:
We are looking for a highly skilled MERN Stack Developer to build and maintain robust web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The ideal candidate will have a passion for coding, an eye for detail, and the ability to create high-performing, scalable web applications. You will work closely with cross-functional teams to deliver user-centric solutions aligned with our business goals.

Key Responsibilities:
Application Development:

Design, develop, test, and deploy full-stack web applications using the MERN stack.
Create and maintain scalable backend APIs using Node.js and Express.js.
Build responsive and user-friendly front-end interfaces using React.js.
Database Management:

Design and manage databases using MongoDB, ensuring data integrity and security.
Optimize database performance and implement efficient query strategies.
API Integration:

Develop and consume RESTful APIs for seamless integration with other systems and third-party services.
Implement authentication and authorization mechanisms, such as JWT or OAuth.
Performance Optimization:

Identify and fix performance bottlenecks on both front-end and back-end.
Optimize application loading times and ensure a smooth user experience.
Collaboration and Teamwork:

Work closely with UI/UX designers to implement user-centric designs.
Collaborate with QA engineers to test and debug applications.
Participate in code reviews and ensure code quality.
Maintenance and Support:

Monitor applications for reliability and scalability.
Troubleshoot issues, apply fixes, and deploy updates as needed.
Maintain technical documentation for future reference.
Continuous Learning and Innovation:

Stay updated with the latest trends and technologies in the MERN stack and web development.
Experiment with new tools and frameworks to enhance development efficiency.
Required Skills and Qualifications:
Proven experience as a Full-Stack Developer, specifically with the MERN stack.
Proficiency in JavaScript, ES6+, and modern React.js (with hooks, context, or Redux).
Strong understanding of Node.js and Express.js for server-side development.
Hands-on experience with MongoDB, including database design and querying.
Familiarity with front-end build tools such as Webpack, Babel, or Vite.
Knowledge of version control tools like Git and platforms such as GitHub.
Strong problem-solving skills and attention to detail.

            `,
            resuma:`
            
[Your Name]
Location: [City, Country]
Email: [Your Email] | Phone: [Your Number]
LinkedIn: [LinkedIn Profile] | GitHub: [GitHub Profile]

Professional Summary
Dynamic and results-driven MERN Stack Developer with over 3 years of experience in designing, developing, and deploying web applications using MongoDB, Express.js, React.js, and Node.js. Proficient in full-stack development, database management, RESTful API integration, and front-end design. Passionate about building responsive, scalable, and high-performance web applications. Strong expertise in troubleshooting, debugging, and optimizing code for optimal performance.

Technical Skills
Front-end Technologies: HTML5, CSS3, JavaScript (ES6), React.js, Redux, Bootstrap, Tailwind CSS
Back-end Technologies: Node.js, Express.js, REST APIs, GraphQL
Database: MongoDB, Mongoose, MySQL
Version Control: Git, GitHub
Authentication: JWT, Passport.js
Deployment: Heroku, Netlify, AWS, Docker
Testing Frameworks: Jest, Mocha, Chai, Cypress
Tools: Postman, Webpack, Babel, Nginx
Other: Agile Methodology, Scrum, CI/CD
Professional Experience
MERN Stack Developer | XYZ Tech Solutions
July 2021 – Present

Designed and developed scalable web applications using the MERN stack for clients in e-commerce and healthcare sectors.
Built RESTful APIs with Node.js and Express.js for server-side logic and integrated with MongoDB for efficient database management.
Worked with front-end teams to integrate React.js for dynamic user interfaces and Redux for state management.
Implemented authentication and authorization features using JWT and Passport.js.
Conducted performance tuning and optimization of web applications to ensure fast load times and smooth user experience.
Collaborated with cross-functional teams, participated in code reviews, and followed Agile methodology for continuous delivery.
Deployed web applications to AWS and Heroku, ensuring smooth integration with CI/CD pipelines.
Junior MERN Stack Developer | ABC Web Solutions
June 2019 – June 2021

Assisted in the development of web applications using React.js for front-end development and Node.js for server-side scripting.
Created and consumed RESTful APIs, ensuring the seamless exchange of data between client-side and server-side.
Integrated MongoDB with Mongoose to manage and query data for several applications.
Contributed to the development of responsive, mobile-first websites using Bootstrap and Tailwind CSS.
Assisted in troubleshooting and debugging issues in the full stack and improved application performance by 25%.
Participated in weekly sprint meetings and collaborated with the design and product teams for application enhancements.
Education
Bachelor’s Degree in Computer Science
[University Name], [Year of Graduation]
Relevant Coursework: Web Development, Data Structures, Algorithms, Database Management Systems

Certifications
Certified MERN Stack Developer | [Issuing Organization] | [Year]
JavaScript Algorithms and Data Structures Certification | freeCodeCamp | [Year]
Node.js Certification | [Issuing Organization] | [Year]
Projects
E-Commerce Web App (MERN Stack)

Developed an e-commerce platform with features such as product listings, shopping cart, and secure payment gateway integration using Stripe.
Built RESTful APIs for managing products, orders, and users.
Implemented user authentication using JWT and session management for admin control.
Social Media Application

Created a social media platform with user profiles, posts, comments, and likes using React.js for the front-end and Node.js/Express.js for the back-end.
Integrated MongoDB for database storage and deployed the application to Heroku.
Implemented real-time chat functionality using Socket.io.
Job Portal Application

Designed a job portal that allows users to post job openings, apply for jobs, and track applications.
Utilized Redux for state management and JWT for user authentication.
Built scalable APIs with Node.js and MongoDB for job postings and application tracking.
Professional Development
MERN Stack Advanced Training – [Platform Name]
Attended workshops on performance optimization, cloud computing, and scaling applications.
Regularly contribute to open-source projects on GitHub to enhance coding skills and learn new technologies.
References
Available upon request.


            `,
            scoures:8
         },
         {
            id:9,
            job:"AI/ML Engineer",
            job_discription:`
Job Title: AI/ML Engineer

Job Summary:
We are seeking an innovative and highly skilled AI/ML Engineer to design, develop, and implement machine learning models and AI-driven solutions. As an AI/ML Engineer, you will collaborate with cross-functional teams to solve complex problems, drive data-driven decision-making, and enhance business processes using advanced AI/ML techniques. This role requires expertise in machine learning frameworks, programming, and a strong analytical mindset.

Key Responsibilities:
Model Development and Deployment:

Design, build, and deploy machine learning models to address real-world business challenges.
Optimize model performance and ensure scalability for production environments.
Leverage cloud platforms for model training and deployment.
Data Analysis and Preparation:

Collect, clean, and preprocess structured and unstructured data for model training.
Perform exploratory data analysis (EDA) to derive actionable insights.
Develop pipelines to automate data preparation and integration.
Algorithm Selection and Implementation:

Research and implement cutting-edge AI/ML algorithms tailored to project requirements.
Fine-tune hyperparameters to improve model accuracy and efficiency.
Experiment with deep learning techniques using frameworks like TensorFlow or PyTorch.
AI Solution Integration:

Integrate AI/ML solutions into existing systems or applications.
Collaborate with software engineers to ensure seamless deployment.
Provide APIs or tools for accessing and interacting with AI models.
Performance Monitoring and Maintenance:

Monitor model performance and retrain models as needed to maintain accuracy over time.
Address issues like concept drift and data inconsistencies.
Develop dashboards and reports to track AI/ML system effectiveness.
Research and Innovation:

Stay updated on the latest advancements in AI/ML technologies and tools.
Contribute to research and development efforts for innovative solutions.
Publish findings or present work at industry conferences as applicable.
Required Skills and Qualifications:
Strong programming skills in Python, R, or Java, with experience in libraries like TensorFlow, PyTorch, Scikit-learn, or Keras.
Solid understanding of machine learning algorithms, deep learning, and natural language processing (NLP).
Proficiency in data manipulation and analysis tools (e.g., Pandas, NumPy, SQL).
Hands-on experience with cloud platforms (AWS, Azure, Google Cloud) for AI/ML solutions.
Familiarity with big data tools like Hadoop, Spark, or Kafka.
Excellent problem-solving and critical-thinking skills.
Bachelor’s degree in Computer Science, Data Science, or a related field.
           

            `,
            resuma:`
[Name]
Location: [City, Country]
Email: [Your Email] | Phone: [Your Number] | GitHub: [GitHub Link] | LinkedIn: [LinkedIn Profile]

Professional Summary
AI/ML Engineer with over 3 years of experience in designing and implementing machine learning models. Proficient in Python, TensorFlow, and Scikit-learn for building predictive models, analyzing large datasets, and delivering AI-powered solutions.

Skills

Languages: Python, R
Frameworks: TensorFlow, Keras, Scikit-learn, PyTorch
Tools: Jupyter, Git, Docker
Data: Pandas, NumPy, SQL
Cloud: AWS, Google Cloud
Professional Experience
Machine Learning Engineer | DataTech Solutions
March 2021 – Present

Developed a recommendation engine that improved product recommendations by 15%.
Built and deployed classification models to predict customer churn with 90% accuracy.
Optimized model performance and implemented hyperparameter tuning for better results.
Education
Master’s Degree in Computer Science (AI/ML) | [University Name] | 2020


            `,
            scoures:8
         },
         {
            id:10,
            job:"UI/UX",
            job_discription:`
Job Title: UI/UX Designer

Job Summary:
We are looking for a creative and user-centered UI/UX Designer to join our team. As a UI/UX Designer, you will be responsible for creating intuitive and engaging designs that enhance the user experience across our digital products. You will work closely with product managers, developers, and other stakeholders to design seamless user interfaces and deliver outstanding user experiences.

Key Responsibilities:
User Research:

Conduct user research to understand the needs, behaviors, and pain points of target users.
Analyze user feedback, competitor products, and market trends to inform design decisions.
Create user personas and journey maps to illustrate user needs and workflows.
UI Design:

Design visually appealing and user-friendly interfaces for web and mobile applications.
Develop wireframes, mockups, and interactive prototypes to communicate design ideas.
Ensure consistency in visual design across different platforms and products.
UX Design:

Optimize user flows, information architecture, and interactions to create smooth, efficient experiences.
Collaborate with developers to implement responsive, accessible, and easy-to-use designs.
Conduct usability testing and iterate on designs based on feedback and analytics.
Collaboration and Communication:

Work closely with product managers, developers, and other stakeholders to align design goals with business objectives.
Present design concepts and solutions to clients and team members, incorporating feedback into iterations.
Maintain design documentation and style guides to ensure consistency across all platforms.
Usability Testing:

Plan, conduct, and analyze usability testing sessions to validate design decisions.
Use data and user feedback to optimize designs for improved user satisfaction and engagement.
A/B test different design variations to determine the most effective solutions.
Continuous Learning and Improvement:

Stay updated on the latest design trends, tools, and technologies.
Experiment with new techniques, tools, and workflows to improve design quality and efficiency.
Provide mentorship and guidance to junior designers and collaborate in team brainstorming sessions.
Required Skills and Qualifications:
Proven experience as a UI/UX Designer, Interaction Designer, or similar role.
Strong portfolio demonstrating experience with UI/UX design and problem-solving.
Proficiency in design and prototyping tools (e.g., Sketch, Adobe XD, Figma, InVision, or similar).
Experience with HTML, CSS, and basic front-end development (optional, but a plus).
Familiarity with design systems, wireframing, and creating user flows.
Solid understanding of usability principles, responsive design, and accessibility standards.
Excellent communication, presentation, and collaboration skills.

            
            `,
            resuma:`
[Name]
Location: [City, Country]
Email: [Your Email] | Phone: [Your Number] | Portfolio: [Portfolio Link] | LinkedIn: [LinkedIn Profile]

Professional Summary
Creative and user-focused UI/UX Designer with 5+ years of experience in designing intuitive web and mobile interfaces. Expert in transforming complex requirements into engaging user experiences through wireframes, prototypes, and usability testing.

Skills

Tools: Sketch, Figma, Adobe XD, InVision
Wireframing: Balsamiq, Figma
Prototyping: Axure, Marvel
Web Design: HTML5, CSS3, Bootstrap
User Research: Usability Testing, Surveys, A/B Testing
Professional Experience
UI/UX Designer | ABC Corporation
May 2019 – Present

Designed wireframes and high-fidelity mockups for an e-commerce platform, improving conversion rates by 25%.
Led user research efforts, including interviews and usability tests, to validate design decisions.
Collaborated with developers to ensure the seamless implementation of designs.
Education
Bachelor’s Degree in Graphic Design | [University Name] | 2018


            `,
            scoures:8
         },
    ]

    const [openModal, setOpenModal] = useState(true);
    


  return (
   <>
 <div className="overflow-x-auto mt-5 mx-16">
  <Table hoverable>
    <Table.Head>
      <Table.HeadCell>No.</Table.HeadCell>
      <Table.HeadCell>Job Role</Table.HeadCell>
      <Table.HeadCell>Resume</Table.HeadCell>
      <Table.HeadCell>Maching Keywords</Table.HeadCell>
      <Table.HeadCell>AI Scores</Table.HeadCell>
    </Table.Head>
    <Table.Body className="divide-y">
      {data.map((item, index) => (
        <Table.Row
          key={index}
          className="bg-white dark:border-gray-700 dark:bg-gray-800"
        >
          <Table.Cell className="text-center">{item.id}</Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {item.job}
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <div>
              <Button onClick={() => setOpenModal(index)}>View Resume</Button>
              <Modal show={openModal === index} onClose={() => setOpenModal(null)}>
                <Modal.Header>Resume</Modal.Header>
                <Modal.Body>
                  <div className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      {item.resuma}
                    </p>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setOpenModal(null)}>Close</Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Table.Cell>

          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">
            {`${item.scoures}/10`}
          </Table.Cell>

          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">
            {`${item.scoures}/10`}
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
</div>

   
   </>
  )
}

export default Result