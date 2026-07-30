export function trackCtaClick(location: string, text: string) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'cta_click',
    cta_text: text,
    cta_location: location,
  });
}

export function trackCaseStudyClick(name: string, slug: string, industry: string) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'case_study_click',
    case_study_name: name,
    case_study_slug: slug,
    case_study_industry: industry,
  });
}

export function trackGenerateLead(leadSource: string, leadType: string) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'generate_lead',
    lead_source: leadSource,
    lead_type: leadType,
  });
}
