data "scaleway_account_project" "default_project" {
  name = var.project_name
}

data "scaleway_domain_registration" "root_domain_registration" {
  domain_name = "asgerthyregod.dk"
}
