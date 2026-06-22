resource "scaleway_domain_registration" "domain_registration" {
  project_id = data.scaleway_account_project.default_project.id
  domain     = "asgerthyregod.dk"
}