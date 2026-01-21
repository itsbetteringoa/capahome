import React, { useState } from 'react';
import { Search, Phone, Calendar, MapPin, Wrench, CreditCard, Star, Repeat, MessageSquare, Clock, CheckCircle, AlertCircle, ThumbsUp } from 'lucide-react';

const CustomerJourneyVisualization = () => {
  const [selectedStage, setSelectedStage] = useState(null);
  const [showTimeline, setShowTimeline] = useState(true);

  const journeyStages = [
    {
      id: 1,
      stage: "Awareness",
      icon: <Search size={32} />,
      color: "blue",
      customerFeeling: "😟 Problem! Door won't close properly",
      customerThought: "I need to find a reliable repair service",
      duration: "0-24 hours",
      touchpoints: [
        { channel: "Google Search", action: "Searches 'door repair near me'", system: "Google Ads" },
        { channel: "Thumbtack", action: "Posts repair request", system: "Thumbtack" },
        { channel: "Facebook Ad", action: "Sees targeted ad", system: "Facebook Ads" },
        { channel: "Referral", action: "Friend recommends you", system: "Word of Mouth" }
      ],
      systemActions: [
        "Ad impression logged",
        "Lead captured in system",
        "Initial response triggered"
      ],
      customerExperience: "Discovering you exist and considering options",
      successMetrics: ["Cost per lead", "Lead quality score", "Response time"]
    },
    {
      id: 2,
      stage: "Consideration",
      icon: <Phone size={32} />,
      color: "green",
      customerFeeling: "🤔 Evaluating options",
      customerThought: "Are they reliable? What's the price?",
      duration: "Minutes to hours",
      touchpoints: [
        { channel: "Website", action: "Views services & reviews", system: "Company Website" },
        { channel: "Phone Call", action: "Calls business number", system: "OpenPhone" },
        { channel: "SMS", action: "Receives auto-response", system: "OpenPhone + Zapier" },
        { channel: "Reviews", action: "Checks Google/Yelp", system: "Review Sites" }
      ],
      systemActions: [
        "Call logged in Housecall Pro",
        "Customer profile created",
        "Instant SMS confirmation sent",
        "Trello card created for follow-up"
      ],
      customerExperience: "Evaluating trustworthiness and getting initial information",
      successMetrics: ["Answer rate >90%", "Response time <15 min", "Lead-to-quote ratio"]
    },
    {
      id: 3,
      stage: "Booking",
      icon: <Calendar size={32} />,
      color: "purple",
      customerFeeling: "✅ Ready to schedule",
      customerThought: "When can they come? How much will it cost?",
      duration: "5-30 minutes",
      touchpoints: [
        { channel: "Phone", action: "Discusses problem with CSR", system: "OpenPhone" },
        { channel: "Estimate", action: "Receives price quote", system: "Housecall Pro" },
        { channel: "Online Booking", action: "Books time slot", system: "Housecall Pro Portal" },
        { channel: "Confirmation SMS", action: "Gets booking confirmation", system: "OpenPhone Auto" }
      ],
      systemActions: [
        "Job created in Housecall Pro",
        "Tech assigned based on territory",
        "Trello card moves to 'Scheduled'",
        "ZippyKind ticket created",
        "Confirmation SMS sent immediately",
        "Calendar sync to tech's schedule"
      ],
      customerExperience: "Easy booking process with clear pricing and availability",
      successMetrics: ["Booking conversion >40%", "Time to schedule", "Booking abandonment rate"]
    },
    {
      id: 4,
      stage: "Pre-Service",
      icon: <Clock size={32} />,
      color: "yellow",
      customerFeeling: "😌 Anticipating service",
      customerThought: "Will they show up on time?",
      duration: "1-3 days before job",
      touchpoints: [
        { channel: "Reminder SMS", action: "Day before: 'Tomorrow at 2pm'", system: "Zapier Auto" },
        { channel: "Tech Introduction", action: "Morning of: 'Your tech is John' + photo", system: "OpenPhone" },
        { channel: "Prep SMS", action: "Please clear access to door/window", system: "Template" },
        { channel: "Call", action: "Can call anytime with questions", system: "OpenPhone" }
      ],
      systemActions: [
        "Automated reminder 24hrs before",
        "Tech assignment confirmed",
        "Route optimized in ZippyKind",
        "Morning-of tech intro sent",
        "Trello card shows 'Today's jobs'"
      ],
      customerExperience: "Feeling informed and prepared, reducing anxiety",
      successMetrics: ["No-show rate <5%", "Customer preparation", "Pre-service calls"]
    },
    {
      id: 5,
      stage: "Service Day",
      icon: <MapPin size={32} />,
      color: "cyan",
      customerFeeling: "📍 Tracking arrival",
      customerThought: "When will they arrive exactly?",
      duration: "Day of service",
      touchpoints: [
        { channel: "On-the-way SMS", action: "'John is on his way!'", system: "ZippyKind Auto" },
        { channel: "Tracking Link", action: "Live GPS tracking like Uber", system: "ZippyKind" },
        { channel: "ETA Updates", action: "'John is 15 minutes away'", system: "ZippyKind Auto" },
        { channel: "Arrival SMS", action: "'John has arrived'", system: "ZippyKind Auto" }
      ],
      systemActions: [
        "Tech starts route in ZippyKind",
        "GPS tracking active",
        "Automatic ETA updates every 5 min",
        "Customer gets tracking link",
        "Trello card: 'En route'",
        "Job status updated in Housecall Pro"
      ],
      customerExperience: "Complete transparency with real-time tracking - no waiting around",
      successMetrics: ["On-time arrival >90%", "Customer tracking engagement", "ETA accuracy"]
    },
    {
      id: 6,
      stage: "Service Delivery",
      icon: <Wrench size={32} />,
      color: "orange",
      customerFeeling: "🔧 Watching repair happen",
      customerThought: "Are they professional? Will it be done right?",
      duration: "30-90 minutes",
      touchpoints: [
        { channel: "In-Person", action: "Tech introduces, explains problem", system: "Face to Face" },
        { channel: "Before Photos", action: "Documents existing condition", system: "Housecall Pro App" },
        { channel: "Estimate Adjustment", action: "If more work needed, explains", system: "Housecall Pro" },
        { channel: "Work Performance", action: "Completes repair professionally", system: "Physical Work" },
        { channel: "After Photos", action: "Shows completed work", system: "Housecall Pro App" },
        { channel: "Walkthrough", action: "Tests with customer", system: "Quality Check" }
      ],
      systemActions: [
        "Job status: 'In Progress' in all systems",
        "Photos uploaded to Housecall Pro",
        "Time tracking active",
        "Notes logged for future reference",
        "GPS coordinates captured",
        "Before/after comparison ready"
      ],
      customerExperience: "Professional service with clear communication and documentation",
      successMetrics: ["First-time fix rate >85%", "Job duration vs estimate", "Photo compliance 100%"]
    },
    {
      id: 7,
      stage: "Payment",
      icon: <CreditCard size={32} />,
      color: "emerald",
      customerFeeling: "💳 Ready to pay",
      customerThought: "Easy payment process?",
      duration: "5-10 minutes",
      touchpoints: [
        { channel: "Invoice Review", action: "Reviews itemized invoice on tablet", system: "Housecall Pro" },
        { channel: "Payment Options", action: "Card, cash, check, or pay later", system: "Housecall Pro" },
        { channel: "Digital Signature", action: "Signs on tech's tablet", system: "Housecall Pro App" },
        { channel: "Receipt", action: "Email/SMS receipt immediately", system: "Auto-send" },
        { channel: "Payment Link", action: "If paying later, gets link", system: "OpenPhone SMS" }
      ],
      systemActions: [
        "Invoice created in Housecall Pro",
        "Payment processed immediately",
        "Receipt sent automatically",
        "Syncs to QuickBooks instantly",
        "Trello card: 'Completed & Paid'",
        "Customer signature captured with GPS"
      ],
      customerExperience: "Seamless payment with multiple options, instant receipt",
      successMetrics: ["Same-day payment >80%", "Payment time <5 min", "Outstanding AR <7 days"]
    },
    {
      id: 8,
      stage: "Post-Service",
      icon: <Star size={32} />,
      color: "pink",
      customerFeeling: "😊 Satisfied (hopefully!)",
      customerThought: "That went well!",
      duration: "1-24 hours after",
      touchpoints: [
        { channel: "Thank You SMS", action: "Immediate: 'Thanks! Invoice: [link]'", system: "OpenPhone Auto" },
        { channel: "Review Request", action: "1 hour later: 'How did we do?'", system: "Zapier Auto" },
        { channel: "Follow-up Call", action: "Next day: 'Everything working?'", system: "OpenPhone" },
        { channel: "Warranty Info", action: "SMS with warranty details", system: "Template" }
      ],
      systemActions: [
        "Job status: 'Completed'",
        "Automatic review request sent",
        "Follow-up task created for 24hrs",
        "Customer satisfaction survey triggered",
        "Added to marketing list (with permission)"
      ],
      customerExperience: "Feeling valued with proactive follow-up and review request",
      successMetrics: ["Review rate >30%", "Positive review rate >90%", "Issue resolution <24hrs"]
    },
    {
      id: 9,
      stage: "Retention",
      icon: <Repeat size={32} />,
      color: "indigo",
      customerFeeling: "🔄 Loyal customer",
      customerThought: "I'll use them again",
      duration: "Ongoing",
      touchpoints: [
        { channel: "Maintenance Reminder", action: "6 months: 'Time for check-up'", system: "Zapier Schedule" },
        { channel: "Seasonal Tips", action: "Email with winterization tips", system: "Marketing" },
        { channel: "Referral Program", action: "Invite to refer friends for discount", system: "Housecall Pro" },
        { channel: "Exclusive Offers", action: "VIP customer discount offers", system: "Email Campaign" },
        { channel: "Birthday/Anniversary", action: "Special occasion discount", system: "Auto Email" }
      ],
      systemActions: [
        "Customer tagged as 'Active'",
        "Service history tracked",
        "Automatic maintenance reminders",
        "Referral tracking activated",
        "Lifetime value calculated",
        "VIP status based on spend"
      ],
      customerExperience: "Ongoing relationship with valuable maintenance reminders and perks",
      successMetrics: ["Repeat rate >30%", "Customer lifetime value", "Referral rate >15%"]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-500 border-blue-600",
      green: "bg-green-500 border-green-600",
      purple: "bg-purple-500 border-purple-600",
      yellow: "bg-yellow-500 border-yellow-600",
      cyan: "bg-cyan-500 border-cyan-600",
      orange: "bg-orange-500 border-orange-600",
      emerald: "bg-emerald-500 border-emerald-600",
      pink: "bg-pink-500 border-pink-600",
      indigo: "bg-indigo-500 border-indigo-600"
    };
    return colors[color] || "bg-gray-500 border-gray-600";
  };

  const emotionTimeline = [
    { stage: 1, emotion: "😟", level: 30, label: "Frustrated" },
    { stage: 2, emotion: "🤔", level: 40, label: "Curious" },
    { stage: 3, emotion: "😊", level: 60, label: "Hopeful" },
    { stage: 4, emotion: "😌", level: 65, label: "Comfortable" },
    { stage: 5, emotion: "📍", level: 70, label: "Informed" },
    { stage: 6, emotion: "🔧", level: 75, label: "Observant" },
    { stage: 7, emotion: "💳", level: 80, label: "Satisfied" },
    { stage: 8, emotion: "😊", level: 90, label: "Happy" },
    { stage: 9, emotion: "🤝", level: 95, label: "Loyal" }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Complete Customer Journey Map
          </h1>
          <p className="text-slate-300 text-lg mb-4">
            From First Contact to Loyal Customer - Every Touchpoint Optimized
          </p>
          
          {/* Toggle */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setShowTimeline(!showTimeline)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {showTimeline ? 'Show Grid View' : 'Show Timeline View'}
            </button>
          </div>
        </div>

        {/* Emotion Graph */}
        <div className="bg-slate-800 rounded-xl p-6 mb-8 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <ThumbsUp className="mr-2" /> Customer Satisfaction Journey
          </h2>
          <div className="relative h-40 bg-slate-700 rounded-lg p-4">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <div className="border-t border-slate-600"></div>
              <div className="border-t border-slate-600"></div>
              <div className="border-t border-slate-600"></div>
              <div className="border-t border-slate-600"></div>
            </div>
            
            {/* Emotion line */}
            <svg className="absolute inset-0 w-full h-full" style={{padding: '16px'}}>
              <polyline
                points={emotionTimeline.map((point, idx) => 
                  `${(idx / (emotionTimeline.length - 1)) * 100}%,${100 - point.level}%`
                ).join(' ')}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                className="drop-shadow-lg"
              />
              {emotionTimeline.map((point, idx) => (
                <g key={point.stage}>
                  <circle
                    cx={`${(idx / (emotionTimeline.length - 1)) * 100}%`}
                    cy={`${100 - point.level}%`}
                    r="6"
                    fill="#3b82f6"
                    className="drop-shadow-lg"
                  />
                </g>
              ))}
            </svg>
            
            {/* Emotion labels */}
            <div className="absolute inset-0 flex items-end justify-between p-4">
              {emotionTimeline.map((point, idx) => (
                <div key={point.stage} className="flex flex-col items-center" style={{width: `${100/emotionTimeline.length}%`}}>
                  <div className="text-2xl mb-1">{point.emotion}</div>
                  <div className="text-xs text-slate-400">{point.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between text-xs text-slate-400 mt-2">
            <span>Problem Discovery</span>
            <span>Peak Experience</span>
            <span>Loyalty</span>
          </div>
        </div>

        {/* Journey Stages */}
        {showTimeline ? (
          /* Timeline View */
          <div className="space-y-6">
            {journeyStages.map((journey, idx) => (
              <div key={journey.id} className="relative">
                {/* Connector Line */}
                {idx < journeyStages.length - 1 && (
                  <div className="absolute left-12 top-20 w-0.5 h-full bg-slate-600 z-0"></div>
                )}
                
                {/* Stage Card */}
                <div 
                  className={`relative bg-slate-800 rounded-xl p-6 shadow-xl cursor-pointer transition-all hover:scale-[1.02] ${
                    selectedStage === journey.id ? 'ring-4 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedStage(selectedStage === journey.id ? null : journey.id)}
                >
                  <div className="flex items-start gap-6">
                    {/* Stage Icon */}
                    <div className={`${getColorClasses(journey.color)} p-4 rounded-xl text-white flex-shrink-0 z-10`}>
                      {journey.icon}
                    </div>
                    
                    {/* Stage Content */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="text-2xl font-bold text-white">{journey.stage}</h3>
                            <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">
                              {journey.duration}
                            </span>
                          </div>
                          <p className="text-slate-400 mt-1">{journey.customerExperience}</p>
                        </div>
                      </div>
                      
                      {/* Customer Perspective */}
                      <div className="bg-slate-700 rounded-lg p-4 mb-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm text-slate-400 mb-1">Customer Feeling:</div>
                            <div className="text-white font-semibold">{journey.customerFeeling}</div>
                          </div>
                          <div>
                            <div className="text-sm text-slate-400 mb-1">Customer Thinking:</div>
                            <div className="text-white font-semibold italic">"{journey.customerThought}"</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Touchpoints */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="text-sm font-bold text-blue-400 mb-2 flex items-center">
                            <MessageSquare size={16} className="mr-1" /> Customer Touchpoints
                          </h4>
                          <div className="space-y-2">
                            {journey.touchpoints.map((tp, tpIdx) => (
                              <div key={tpIdx} className="bg-slate-900 rounded p-2 text-sm">
                                <div className="text-blue-300 font-semibold">{tp.channel}</div>
                                <div className="text-slate-400 text-xs">{tp.action}</div>
                                <div className="text-slate-500 text-xs mt-1">→ {tp.system}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-bold text-purple-400 mb-2 flex items-center">
                            <CheckCircle size={16} className="mr-1" /> System Actions
                          </h4>
                          <div className="space-y-2">
                            {journey.systemActions.map((action, aIdx) => (
                              <div key={aIdx} className="bg-slate-900 rounded p-2 text-sm flex items-start">
                                <CheckCircle size={14} className="text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300">{action}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Success Metrics */}
                      <div className="border-t border-slate-700 pt-3">
                        <h4 className="text-sm font-bold text-green-400 mb-2">Success Metrics</h4>
                        <div className="flex flex-wrap gap-2">
                          {journey.successMetrics.map((metric, mIdx) => (
                            <span key={mIdx} className="px-3 py-1 bg-green-900 bg-opacity-30 text-green-300 rounded-full text-xs">
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Grid View */
          <div className="grid grid-cols-3 gap-6">
            {journeyStages.map((journey) => (
              <div
                key={journey.id}
                className={`bg-slate-800 rounded-xl p-6 cursor-pointer transition-all hover:scale-105 ${
                  selectedStage === journey.id ? 'ring-4 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedStage(selectedStage === journey.id ? null : journey.id)}
              >
                <div className={`${getColorClasses(journey.color)} p-4 rounded-xl text-white inline-block mb-4`}>
                  {journey.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{journey.stage}</h3>
                <p className="text-slate-400 text-sm mb-3">{journey.customerFeeling}</p>
                <div className="text-xs text-slate-500">
                  {journey.touchpoints.length} touchpoints • {journey.duration}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Key Insights */}
        <div className="mt-8 grid grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-6">
            <h3 className="text-white font-bold mb-3 flex items-center">
              <AlertCircle className="mr-2" /> Critical Moments
            </h3>
            <div className="space-y-2 text-sm text-blue-100">
              <div>• First 15 minutes response = 40% conversion</div>
              <div>• Real-time tracking = 95% satisfaction</div>
              <div>• Same-day payment = better cash flow</div>
              <div>• Review request timing = 30%+ review rate</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl p-6">
            <h3 className="text-white font-bold mb-3 flex items-center">
              <CheckCircle className="mr-2" /> Automation Points
            </h3>
            <div className="space-y-2 text-sm text-purple-100">
              <div>• 15+ automated SMS messages</div>
              <div>• Real-time GPS tracking updates</div>
              <div>• Instant invoice & payment sync</div>
              <div>• Automated review requests</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-xl p-6">
            <h3 className="text-white font-bold mb-3 flex items-center">
              <Star className="mr-2" /> Experience Goals
            </h3>
            <div className="space-y-2 text-sm text-green-100">
              <div>• Response time: &lt;15 minutes</div>
              <div>• On-time arrival: &gt;90%</div>
              <div>• Customer rating: 4.8+ stars</div>
              <div>• Repeat rate: &gt;30%</div>
            </div>
          </div>
        </div>

        {/* System Integration Summary */}
        <div className="mt-8 bg-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            Systems Powering The Journey
          </h3>
          <div className="grid grid-cols-5 gap-4 text-center">
            <div>
              <div className="text-3xl mb-2">📱</div>
              <div className="text-white font-semibold">OpenPhone</div>
              <div className="text-xs text-slate-400">20+ automated messages</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🏢</div>
              <div className="text-white font-semibold">Housecall Pro</div>
              <div className="text-xs text-slate-400">Central coordination</div>
            </div>
            <div>
              <div className="text-3xl mb-2">📍</div>
              <div className="text-white font-semibold">ZippyKind</div>
              <div className="text-xs text-slate-400">Live tracking & ETA</div>
            </div>
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-white font-semibold">Zapier</div>
              <div className="text-xs text-slate-400">50+ automations</div>
            </div>
            <div>
              <div className="text-3xl mb-2">💳</div>
              <div className="text-white font-semibold">QuickBooks</div>
              <div className="text-xs text-slate-400">Instant payment sync</div>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-6 bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-6">
          <div className="grid grid-cols-4 gap-4 text-center text-white">
            <div>
              <div className="text-3xl font-bold">9</div>
              <div className="text-sm opacity-75">Journey Stages</div>
            </div>
            <div>
              <div className="text-3xl font-bold">35+</div>
              <div className="text-sm opacity-75">Touchpoints</div>
            </div>
            <div>
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm opacity-75">Auto-Messages</div>
            </div>
            <div>
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm opacity-75">Satisfaction Target</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CustomerJourneyVisualization;