data "scaleway_account_project" "default_project" {
  name = var.resource_group_name
}

data "scaleway_domain_registration" "root_domain_registration" {
  domain_name = "asgerthyregod.dk"
}