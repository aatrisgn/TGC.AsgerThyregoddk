locals {
  resource_location_name = replace(lower(var.environment_type_name), " ", "")
  dns_zone_resource_name = lower(var.environment_type_name) == "prd" ? "asgerthyregod.dk" : "${var.environment_type_name}.asgerthyregod.dk"
}