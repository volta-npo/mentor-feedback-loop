export const config = {
    "number": 46,
    "slug": "mentor-feedback-loop",
    "title": "Mentor Feedback Loop",
    "category": "Student Agency Operations",
    "tagline": "Structured feedback cycles between CPG-style mentors and student pods.",
    "persona": "Mentors overseeing many student teams.",
    "gap": "Mentorship becomes ad hoc without clear artifacts, rubrics, and follow-through.",
    "niche": "Professional mentorship in student-led consulting.",
    "metric": "mentor comments resolved before delivery",
    "modules": [
        "Review request template",
        "Feedback taxonomy",
        "Action item tracker",
        "Growth reflection"
    ],
    "theme": {
        "accent": "#f97316",
        "accent2": "#fdba74",
        "emoji": "\ud83c\udf93",
        "metricLabel": "Operating readiness",
        "workflow": [
            "Set roles and artifacts",
            "Run rubric review",
            "Resolve blockers",
            "Export operating packet"
        ],
        "privacy": "Separate internal student notes from client-facing exports. Never store passwords."
    },
    "statuses": [
        "not-started",
        "blocked",
        "in-progress",
        "ready",
        "approved"
    ],
    "criteria": [
        {
            "id": "review-request-template",
            "label": "Review request template",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify review request template with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "feedback-taxonomy",
            "label": "Feedback taxonomy",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify feedback taxonomy with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "action-item-tracker",
            "label": "Action item tracker",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify action item tracker with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "growth-reflection",
            "label": "Growth reflection",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify growth reflection with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "evidence-quality",
            "label": "Evidence quality",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
        },
        {
            "id": "owner-handoff",
            "label": "Owner handoff",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Make the output understandable and maintainable by a nontechnical owner."
        },
        {
            "id": "mission-alignment",
            "label": "Mission alignment",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
        },
        {
            "id": "qa-safety",
            "label": "QA and safety",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
        }
    ],
    "templates": {
        "actions": [
            "Run a real Volta scenario for Mentor Feedback Loop and capture baseline evidence.",
            "Complete the review request template workflow with owner-safe notes.",
            "Resolve all blocked rubric items and add evidence for every ready item.",
            "Export the handoff packet and review it with a mentor before client use."
        ]
    },
    "sample": {
        "clientName": "Volta Cyprus Chapter",
        "chapter": "Cyprus",
        "studentLead": "Volta Student Lead",
        "notes": "Internal chapter operations project for student-led delivery excellence. Mentor Feedback Loop sample.",
        "evidencePrefix": "Mentor Feedback Loop",
        "evidence": [
            "Discovery call notes captured with owner confirmation.",
            "Public digital footprint reviewed and summarized.",
            "Mentor QA comments attached before handoff."
        ]
    }
};
//# sourceMappingURL=config.js.map