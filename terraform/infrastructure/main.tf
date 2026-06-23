resource "scaleway_domain_record" "a_records" {
  for_each = toset(local.cluster_domains)

  dns_zone = "asgerthyregod.dk"
  name     = each.value
  type     = "A"
  data     = "137.117.132.68"
  ttl      = 3600
}