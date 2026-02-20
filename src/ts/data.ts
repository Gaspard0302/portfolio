export type ProjectCategory = 'Web' | 'Mobile' | 'OSS';

export interface Project {
  title: string;
  description: string;
  category: ProjectCategory;
  link?: string;
}

export interface ResearchPaper {
  title: string;
  description: string;
  file: string;
}

export interface Education {
  school: string;
  degree: string;
  year: string;
  description: string;
  courses?: string;
  researchPaper?: ResearchPaper;
}

export interface WorkEntry {
  role: string;
  company: string;
  period: string;
  details: string[];
}

export interface Paper {
  title: string;
  link: string;
  thoughts: string;
}

export const PAGE_TITLE = 'Digital CV / Gaspard Hassenforder';
export const NAME = 'Gaspard Hassenforder';
export const DESCRIPTION =
  'AI Engineer & Data Scientist specializing in autonomous multi-agent systems, RAG architectures, and scalable AI solutions. Passionate about bridging the gap between research and production to drive business value. Expert in Python, TypeScript, and cloud infrastructure.';

export const EMAIL = 'hassenforder.gaspard@gmail.com';

export const SOCIAL_MEDIA = {
  LinkedIn: 'https://www.linkedin.com/in/gaspard-hassenforder-554431225/',
  GitHub: 'https://github.com/Gaspard0302',
};

export const PROJECTS: Project[] = [
  {
    title: 'AgentOverflow',
    description:
      'A public, shared, machine-native knowledge ledger where AI agents publish problems, collaborate on solutions, and build reputation. Agents search for known issues via signature deduplication and semantic search (pgvector), post structured problems, submit and vote on solutions, and earn reputation for successful contributions. Ships with a native MCP server so any AI agent can integrate in seconds.',
    category: 'OSS',
    link: 'https://agent-overflow.com',
  },
  {
    title: 'On-Device AI Hackathon (Winner)',
    description:
      "Won First Place at a hackathon sponsored by Meta, Hugging Face, Scalaway, and Entrepreneur First. Developed 'NamastAI,' a yoga assistant app integrating multiple AI models for real-time pose correction and audible feedback. Prize: €3,000 + recognition for technical innovation and commercial viability.",
    category: 'Mobile',
  },
  {
    title: 'Homelab AI Server',
    description:
      'Built a personal AI server using a Raspberry Pi 5, creating a private cloud infrastructure for storing personal data. Implemented both local LLM capabilities and API integration, featuring a chatbot with RAG (Retrieval Augmented Generation) functionality to query personal documents. Integrated smart home connectivity for controlling smart lights and added voice activation through microphone input.',
    category: 'OSS',
  },
  {
    title: 'Automated LEGO Designer',
    description:
      'Developed an MCP (Model Context Protocol) integration enabling AI to interact with LeoCAD, a specialized CAD software for LEGO designs. Created an automated system that generates LEGO models from images or text descriptions using AI, with planned functionality for automatic parts ordering.',
    category: 'OSS',
  },
  {
    title: 'Trained HRM for Queens Game',
    description:
      "Leveraged the Hierarchical Reasoning Model (HRM) architecture to solve the Queens LinkedIn puzzle game. Created a comprehensive training dataset by exploiting the game's inherent symmetries for data augmentation. The model's ability to handle fixed-size grids made it particularly well-suited for this application.",
    category: 'OSS',
  },
  {
    title: 'Powerpoint Analyser For Venture Capital',
    description:
      'Developed a tool that analyses startup pitch decks, extracts relevant information, and performs due diligence checks on founders, business models, and market sizing. Generates a score for the startup based on extracted information, addressing the critical need for rapid decision-making in the current AI investment boom.',
    category: 'Web',
  },
  {
    title: 'Recreating Apple GenMoji',
    description:
      'Fine-tuned SDXL Lightning image generation model with emoji datasets to recreate the iOS 18 GenMoji feature for personalized emoji generation.',
    category: 'OSS',
  },
  {
    title: 'CapGemini DataCamp',
    description:
      'Contributed to a team project analysing customer feedback via sentiment analysis, utilising BERT and GPT-3.5 for data scraped from Trustpilot. Enhanced client\'s customer satisfaction through actionable insights derived from advanced NLP techniques.',
    category: 'Web',
  },
  {
    title: 'Business Strategy Projects',
    description:
      "Various projects including: Customer Churn Prediction (BGC X) for lifetime value estimation; L'Oréal Marketing Mix Analysis for budget optimization; Luxury Brand Event Optimization (Eleven Consulting) using causality techniques; Unibail-Rodamco-Westfield Retail Analysis covering 20+ European malls.",
    category: 'Web',
  },
];

export const EXPERIENCE: string[] = [
  '✔️ Dual French-British citizen, Bilingual in French and English',
  '✔️ Strong foundations in machine learning, multi-agent systems, and advanced Python',
  '✔️ Experience in consultancy, RAG systems, causality modeling, and marketing mix modeling',
  '✔️ Judo Black Belt (1st Dan) - 11+ years experience, team captain',
  '✔️ Mathematics Tutor - Helped A-level student achieve A* grade',
];

export const SKILLS: Record<string, string> = {
  Programming: 'Python (Pandas, NumPy, Scikit-learn, PyTorch, Keras, Langchain), TypeScript, SQL, R, Spark, C#',
  'AI/ML': 'Machine Learning, Deep Learning, Multi-Agent Systems, RAG, Causality Modeling, NLP',
  'Cloud & Tools': 'Google Cloud, BigQuery, Docker, MLflow, Databricks, Dataiku, Git',
  'Data Visualization': 'Tableau, Plotly, Seaborn',
  Databases: 'PostgreSQL, BigQuery',
};

export const EDUCATION: Education[] = [
  {
    school: 'HEC, Paris',
    degree: 'Master in Data Science and AI for Business',
    year: '2024/2025',
    description:
      "Focused on real-world business challenges through data-driven solutions. Currently writing master's dissertation on structure and hierarchy effects in multi-agent systems for coding benchmarks like SWE-Bench.",
    courses:
      'Algorithmic Fairness and Interpretability, Causal Inference, ML Ops, Deep Learning, Reinforcement Learning, AI Ethics, Strategy and Data',
    researchPaper: {
      title: 'The Hybridization of Consultancy Work',
      description:
        'Designed sophisticated human-AI partnership system with hierarchical multi-agent architecture and dynamic knowledge graph integration. Projected 62% reduction in proposal creation time.',
      file: 'ResearchPaper.pdf',
    },
  },
  {
    school: 'Polytechnique, Paris',
    degree: 'Master in Data Science and AI for Business',
    year: '2023/2024',
    description:
      'Honed expertise in key disciplines including Statistics, Machine Learning, Database Management, Deep Learning, and Optimization.',
    courses: 'Statistics with R, Machine Learning I & II, Linear Algebra & Regression, Optimization & Deep Learning',
  },
  {
    school: 'Warwick University, London, UK',
    degree: 'Bachelor in Mathematics',
    year: '2020/2023',
    description: 'High 2.1 degree with modules in Topology, Multivariate Statistics, Number Theory.',
  },
  {
    school: 'Lycée Francais Charles de Gaulle, London, UK',
    degree: 'French Baccalauréat (Scientific Section)',
    year: '2020',
    description: 'Obtained with highest honors (17.02/20), specializing in Maths, Physics, and Sciences.',
  },
];

export const WORK_HISTORY: WorkEntry[] = [
  {
    role: 'AI Engineer Consultant',
    company: 'Veltys',
    period: 'April 2025 / September 2025',
    details: [
      'Designed and developed a multi-agent AI system to automate the end-to-end workflow for consultancy proposals and company research',
      'Built a knowledge graph platform with custom agents to surface relevant data, reducing administrative time by half',
      'Implemented Google Cloud database architecture with automated data ingestion and BigQuery chatbot querying',
      'Enabled consultants to focus on high-value strategy work by eliminating repetitive research tasks',
    ],
  },
  {
    role: 'Data Scientist Intern',
    company: 'Ekimetrics',
    period: 'April 2024 / September 2024',
    details: [
      'Implemented a Retrieval Augmented Generation (RAG) solution to automate Corporate Sustainability Assessment (CSA) questionnaire process for S&P Global ESG evaluation',
      'Developed causality models using Python (EconML, DoWhy) to measure customer uplift for YouTube Brand Lift campaigns for a global brand',
      'Contributed to Marketing Mix Modeling (MMM) project for a major airline to optimize budget allocation and improve marketing ROI',
      'Worked with unstructured questionnaires, PDF parsing, and citation-based answer generation',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'VP & White UK Ltd',
    period: 'August 2022 / September 2022',
    details: [
      'Developed front and back-end processes for e-learning platform using C#, SQL, CSS, .NET',
      'Created unit testing processes and provided comprehensive usage feedback',
    ],
  },
  {
    role: 'Partnerships and University Recruitment Analyst Intern',
    company: 'Dassault Systèmes Ltd',
    period: 'July 2019',
    details: [
      'Analyzed and mapped university partnerships to optimize recruitment strategies',
      'Gained hands-on experience with CAD software (Catia, SolidWorks) for aerospace models',
    ],
  },
];

export const PAPERS: Paper[] = [
  {
    title: 'Hierarchical Reasoning Model',
    link: 'https://arxiv.org/abs/2506.21734',
    thoughts: `The **Hierarchical Reasoning Model (HRM)** paper is one of the most intriguing pieces of research I've encountered lately. The idea of leveraging a brain-inspired architecture with two interconnected recurrent modules—one for high-level, abstract reasoning and another for detailed, rapid computations—feels like a significant departure from the current trend of scaling up transformer models. It's refreshing to see RNNs making a comeback, especially with each cell incorporating transformer-based attention mechanisms.

What stands out the most is how HRM achieves such strong performance with only **27 million parameters**, outperforming much larger models like o3 and Grok4 on the ARC-AGI benchmark. Its ability to solve complex Sudoku puzzles and navigate mazes perfectly—tasks where traditional LLMs often fail—is impressive. However, I do wonder if the benchmarks used are somewhat tailored to highlight HRM's strengths, as real-world problems tend to be far more unstructured and open-ended.

Despite its strengths, HRM has notable limitations. The model's non-autoregressive nature means it can only process fixed-size grids as input and output, making it less versatile for general-purpose tasks like text generation or open-ended reasoning. Additionally, the reliance on a token to specify the problem type within the input feels like a constraint that limits its applicability in more dynamic, real-world scenarios.

The **ARC Prize's independent analysis** provided a more grounded perspective on HRM's performance. While the model performs well on ARC-AGI-1, its accuracy plummets to just **2% on the more challenging ARC-AGI-2 benchmark**. This suggests that HRM's reasoning capabilities may not generalize as well as initially thought. Furthermore, the analysis revealed that much of HRM's success can be attributed to **iterative refinement** rather than the hierarchical architecture itself. In fact, a standard transformer with similar parameters can achieve comparable results, which is somewhat underwhelming given the initial hype.

Another point of concern is HRM's reliance on **puzzle_id embeddings**, which means it can't generalize to new tasks it hasn't encountered during training. This is a significant limitation if we're considering HRM as a step toward AGI. Additionally, while the paper highlights the use of 1,000 augmentations per task, the analysis shows that similar performance can be achieved with just 30-300 augmentations, suggesting that some of the computational overhead might be unnecessary.

Overall, HRM is a fascinating development in AI research. It challenges the notion that bigger models are inherently better and introduces a compelling brain-inspired design. However, the critical analysis reveals that its performance gains may not be as revolutionary as initially claimed. It's still an exciting direction, and I'm curious to see how this architecture evolves—perhaps in combination with other techniques like diffusion models—to address its current limitations.`,
  },
  {
    title: 'Muon Clip Optimizer',
    link: 'https://arxiv.org/abs/2507.20534',
    thoughts: `The introduction of the **Kimi K2 model** by Moonshot AI showcases some truly groundbreaking advancements in AI model optimization and architecture design. At its core, Kimi K2 is a massive 1 trillion parameter model with 32 billion active parameters, which briefly held the title of the state-of-the-art open-source non-reasoning model.

### Muon Clip Optimizer
One of the standout innovations in Kimi K2 is the use of the **Muon Clip Optimizer**. This optimizer addresses a common issue in deep learning: loss spikes during training. Unlike traditional optimizers like Adam, which can overshoot and cause instability, the Muon Clip Optimizer introduces a mechanism to pause and adjust momentum dynamically. This results in a more stable descent through the loss landscape and significantly reduces training time and computational cost by up to 35%.

- **Adaptive Momentum Adjustment**: By pausing to adjust the direction and magnitude of updates, the Muon optimizer prevents the overshooting problem common in Adam. This leads to more stable and efficient training.
- **QK Clip Innovation**: Initially, the Muon optimizer faced challenges at scale, where outliers in the query and key norms would cause instability. The introduction of the QK Clip addressed this by clipping these outliers, thereby stabilizing training and making it viable for large-scale models like Kimi K2.

### Architectural Innovations
- Moonshot AI made several notable modifications to the DeepSeek V3 architecture in Kimi K2:
  - Increased the number of experts per layer by 50% without changing the number of active parameters per token, leveraging a new sparsity scaling law.
  - Reduced the number of attention heads from 128 to 64, significantly cutting down on parameters but maintaining performance with only a 2% degradation in quality.
  - Simplified the routing mechanism by removing expert grouping, which became unnecessary at the trillion parameter scale where each GPU holds a single expert.

### Impact and Implications
The advancements in Kimi K2 and the introduction of the Muon Clip Optimizer represent a significant leap in training efficiency and stability for large-scale AI models. The ability to train models with fewer loss spikes and greater computational efficiency opens new avenues for developing more powerful models. Additionally, the innovations in model architecture and optimization techniques demonstrated by Moonshot AI could influence future research and development in the field.

Overall, the Kimi K2 and its associated technologies provide valuable insights that may shape the future trajectory of AI model training and optimization. It is thanks to these open source models and the work they do and share openly that open source AI is able to keep up with the closed source models and drives innovation.`,
  },
];
